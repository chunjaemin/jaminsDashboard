<template>
    <div class="first-container">
        <div class="col-sm-5 col-12">
            <div class="flex-column-container card-container1">
                <div class="input-container">
                    <input @change="Pre_UserName = $event.target.value" placeholder="이름 #태그(미입력시 자동 #KR1)" class="input-design">
                    <button @click="search" class="button-design">
                        <p class="button-text">검색</p>
                    </button>
                </div>
                <div class="cardview1 primary-color">
                    <img :src='UserProfile' alt="프로필이미지" class="UserProfile">
                    <div class="UserStatus-container">
                        <div class="cardview1-name primary-box">
                            <p>{{ UserName }}</p>
                        </div>
                        <div class="cardview1-level primary-box">
                            <p>level:{{ UserLevel }}</p>
                        </div>
                    </div>
                </div>
                <div class="cardview2 primary-color">
                    <p class="cardview2-title primary-text">소환사 랭크</p>
                    <img :src='TierImage' alt="티어이미지" class="cardview2-img">
                    <p class="cardview2-tier primary-text">{{ UserTier }}{{ UserRank }}</p>
                    <p class="cardview2-win primary-text">승:{{ UserWins }}</p>
                    <p class="cardview2-lose primary-text">패:{{ UserLosses }}</p>
                    <p class="cardview2-rate primary-text">승률:{{ UserRates }}%</p>
                </div>
            </div>
        </div>
        <div class="col-sm-7 col-12 right-card-conatiner">
            <div class="card-container2">
                <div class="cardview3 primary-color result-color">
                    <p class="cardview3-title primary-text">최근 랭크게임</p>
                    <div class="cardview3-detail">
                        <img :src='MatchChampionIcon' alt="인게임챔피언아이콘" class="cardview3-img">
                        <img :src="MatchPosition" alt="인게임포지션이미지" class="cardview3-positionimg">
                        <p class="cardview3-win primary-text">{{ Win }}</p>
                        <p class="cardview3-name primary-text">{{ MatchChampionName }}</p>
                        <P class="cardview3-kda primary-text">{{ Kills }}/{{ Deaths }}/{{ Assists }}</P>
                    </div>
                </div>
            </div>
            <div class="cardview5 primary-color">
                <LolDamageChartVue v-if="show" :chartData="chart.chartData" :chartOptions="chart.chartOptions" />
            </div>
        </div>
        <div class="cardview6">
            <div class="cardview6-title-box"></div>
            <p class="cardview6-title">가장 많이 플레이한 챔피언</p>
            <img :src=ChampionSplash alt="챔피언배경" class="cardview6-img">
            <div class="cardview6-black-box"></div>
            <img :src="MasteryLevelImg" alt="순련도 레벨" class="cardview6-level-img">
            <p class="carview6-name">{{ MasteryChampionName }}</p>
            <p class="carview6-level">레벨:{{ MasteryLevel }}</p>
            <p class="carview6-point">숙련도: {{ MasteryPoint }}</p>
        </div>
    </div>
</template>

<script>
//컴포넌트 import하는곳
import axios from 'axios'
import LolDamageChartVue from '../Chart/LolDamageChart.vue'
import ChampionIdObject from '../../js/championid'
import TierImageObject from '../../js/tierimage'
import PositionImageObject from '../../js/PositionImage'
import chart from '../../js/DealingChartData'
import LevelObject from '../../js/LolLevel'
//컴포넌트 import끝

export default {
    name: 'UserStatus',
    computed: {
    },
    data() {
        return {
            ChampionIdObject: ChampionIdObject,
            Pre_UserName: '임시 닉네임 보관 변수', //버튼을 눌렀을때 name변수에 할당하기 위해 만든 임시 저장변수
            UserName: '소환사 닉네임',
            UserTag: '',
            UserProfile: 'https://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/0.png', //프로필 이미지 경로
            UserLevel: '소환사 레벨',
            UserId: '유저 고유 id', //유저이름으로 유저id접근->유저id로 데이터접근
            UserTier: 'UNRANK',
            UserRank: '',
            UserWins: 1,
            UserLosses: 1,
            UserRates: '50',
            Win:'미정',
            Kills:'0',
            Deaths:'0',
            Assists:'0',
            UserPid: '유저 고유pid',
            MatchId: '경기 고유번호',
            ChampionId: '챔피언 번호',
            MatchChampionId:'인게임 플레이 챔피언',
            MatchChampionName:'Ashe',
            MatchPosition:PositionImageObject.BASIC,
            MasteryLevel: '1',
            MasteryPoint: '0',
            MasteryChampionName:'애쉬',
            MasteryLevelImg:LevelObject[1],
            ChampionSplash: 'https://ddragon.leagueoflegends.com/cdn/img/champion/centered/Ashe_0.jpg', //챔피언 아이콘 링크
            MatchChampionIcon: 'https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/Ashe.png',
            TierImageObject: TierImageObject,
            TierImage: TierImageObject.UNRANK,
            PositionImageObject : PositionImageObject,
            LevelObject: LevelObject,


            ChampionNameArray: ['???', '???', '???', '???', '???', '???', '???', '???', '???', '???'],
            TotalDamageArray: [100, 300, 200, 250, 130, 100, 300, 200, 250, 150],
            chart: chart, //외부에서 가져오는 차트 데이터

            show: true, //차트의 v-if문을 작동시키는 스위치
        }
    },

    components: {
        LolDamageChartVue,
    },

    mounted(){
        window.addEventListener('resize',this.resizeChart);
        this.callDarkMode();
    },
    
    beforeUnmount(){
        window.removeEventListener('resize',this.resizeChart);
    },

    methods: {
        callDarkMode(){
            this.$emit('darkMode');
        },
        resizeChart(){
            this.show= false;
            this.$nextTick(() => {
                this.show=true;
            });
        },

        setRealName (name) {
            const realNameArray = name.split("#")
            return realNameArray[0]
        },

        setTag (name) {
            const realNameArray = name.split("#")
            return realNameArray[1]
        },

        async search() {//search() 안에있는 각각의 함수는 서로에게 의존성이 있습니다.
            await this.clientKey1(); //user닉네임 => user의 puuid 찾음
            await this.clientKey2(); //user의 puuid => user의 암호화된 id + 레벨, 아이콘 찾음
            this.clientInformation();
            this.championMastery();
            await this.searchMatch();
            this.show = false; //차트off
            await this.matchInformation();
            this.show = true; //차트on
        },
        clientKey1() {
            return new Promise((resolve, reject) => {
                
                this.UserName = this.setRealName(this.Pre_UserName);
                this.UserTag = this.setTag(this.Pre_UserName);
                if (this.UserTag == undefined) {this.UserTag = 'KR1'}
                axios.get(`https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${this.UserName}/${this.UserTag}`, {
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                    },
                })
                    .then(result => {
                        this.UserPid = result.puuid;
                        console.log(this.UserPid)
                        resolve()
                    })
            })
        },

        clientKey2() {
            return new Promise((resolve, reject) => {
                axios.get(`https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${this.UserPid}`, {
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                    },
                })
                    .then(result => {
                        this.UserId = result.id;
                        this.UserLevel = result.summonerLevel;
                        this.UserProfile = `https://ddragon.leagueoflegends.com/cdn/13.19.1/img/profileicon/${result.profileIconId}.png`;
                        resolve()
                    })
            })
        },

        clientInformation() {
            axios.get(`https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${this.UserId}`, {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                },
            })
                .then(result => {
                    if (!result.data[0]) {
                        this.UserTier = 'UNRANK';
                        this.UserRank = '';
                        this.UserWins = '0';
                        this.UserLosses = '0';
                        this.TierImage = this.TierImageObject[this.UserTier];
                        this.UserRates='0'
                    }
                    else if (result.data[0].queueType == 'RANKED_SOLO_5x5') {
                        this.UserTier = result.data[0].tier;
                        this.UserRank = result.data[0].rank;
                        this.UserWins = result.data[0].wins;
                        this.UserLosses = result.data[0].losses;
                        this.TierImage = this.TierImageObject[this.UserTier];
                        this.UserRates = Math.round((this.UserWins / (this.UserWins + this.UserLosses)) * 100)
                    } else if (result.data[1].queueType == 'RANKED_SOLO_5x5') {
                        this.UserTier = result.data[1].tier;
                        this.UserRank = result.data[1].rank;
                        this.UserWins = result.data[1].wins;
                        this.UserLosses = result.data[1].losses;
                        this.TierImage = this.TierImageObject[this.UserTier];
                        this.UserRates = Math.round((this.UserWins / (this.UserWins + this.UserLosses)) * 100)
                    }
                })
        },
        championMastery() {
            axios.get(`https://kr.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid/${this.UserPid}`, {
                params: {
                    api_key: import.meta.env.VITE_API_KEY,
                },
            })
                .then(result => {
                    this.ChampionId = result.data[0].championId;
                    this.MasteryChampionName=ChampionIdObject[result.data[0].championId];
                    this.MasteryLevel = result.data[0].championLevel;
                    this.MasteryLevelImg=LevelObject[this.MasteryLevel]
                    this.MasteryPoint = result.data[0].championPoints;
                    this.ChampionSplash = `https://ddragon.leagueoflegends.com/cdn/img/champion/centered/${ChampionIdObject[this.ChampionId]}_0.jpg`
                })
        },
        searchMatch() {
            return new Promise((resolve, reject) => {
                axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${this.UserPid}/ids?type=ranked&start=0&count=1`, {
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                    },
                })
                    .then(result => {
                        if (!result.data[0]) {
                            this.Kills = '0'
                            this.Deaths = '0'
                            this.Assists = '0'
                            this.Win='최근 랭크게임 없음'
                            this.MatchChampionName = 'Ashe';
                            this.MatchChampionIcon = 'https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/Ashe.png';
                            this.MatchPosition = PositionImageObject[result.data.info.participants[i].teamPosition]
                        }
                        else if (result.data[0]) {
                            this.MatchId = result.data[0];
                        }
                        resolve();
                    })
            })
        },
        matchInformation() {
            return new Promise((resolve, reject) => {
                axios.get(`https://asia.api.riotgames.com/lol/match/v5/matches/${this.MatchId}?api_key=RGAPI-cec0ef04-d6e1-42f9-8f69-af097b9a3780`, {
                    params: {
                        api_key: import.meta.env.VITE_API_KEY,
                    },
                })
                    .then(result => {
                        for (let i = 0; i < 10; i++) {
                            this.ChampionNameArray[i] = result.data.info.participants[i].championName;
                            this.TotalDamageArray[i] = result.data.info.participants[i].totalDamageDealtToChampions;
                            if (result.data.info.participants[i].summonerId==this.UserId) {
                                this.Kills=result.data.info.participants[i].kills;
                                this.Deaths=result.data.info.participants[i].deaths;
                                this.Assists=result.data.info.participants[i].assists;
                                this.MatchChampionId=result.data.info.participants[i].championId;
                                this.MatchChampionName=this.ChampionIdObject[this.MatchChampionId];
                                this.MatchChampionIcon=`https://ddragon.leagueoflegends.com/cdn/13.19.1/img/champion/${ChampionIdObject[this.MatchChampionId]}.png`;
                                this.MatchPosition=PositionImageObject.BASIC
                                if (result.data.info.participants[i].win==true) {//승리와 패배를 구분하여 다른색으로 보여주는 로직
                                    this.Win='승리'
                                    const colorWin = document.querySelectorAll('.result-color')
                                    colorWin.forEach(element=> {
                                        element.classList.remove('pink');
                                        element.classList.add('skyblue');
                                    });
                                } else {
                                    this.Win='패배'
                                    const colorWin = document.querySelectorAll('.result-color')
                                    colorWin.forEach(element=> {
                                        element.classList.remove('skyblue');
                                        element.classList.add('pink');
                                    });
                                }
                            }
                        }
                        this.chart.chartData.datasets[0].data = [...this.TotalDamageArray];
                        this.chart.chartData.labels = [...this.ChampionNameArray];
                        resolve();
                    })
            });
        },
    },
}

</script>

<style>
/**css import하는곳 */
@import '../../css/UserStatus.css';
@import '../../css/Color.css';

p {
    color: white;
}
</style>