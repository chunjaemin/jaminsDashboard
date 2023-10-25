<template>
    <div class="temp-box">
        <div class="canvas">
            <div v-if="!loadingComplete">
                <div class="progressbar-container">
                    <p class="progressbar-text">로딩중:{{ progress }}%</p>
                    <div :style="{ width: `${progress}%`, height: '20px' }" class="progressbar"></div>
                </div>
            </div>
            <div class="color-box">
                <div class="color-icon-container">
                    <i class="bi bi-palette color-choice-icon" @click="ColorHidden=!ColorHidden"></i>
                </div>
                <div class="color-choice-container" v-if="ColorHidden">
                    <div v-for="(color,i) in ColorArray" :key="color" :style="{backgroundColor: color}" @click='clickChange(i)' class="color-choice" >
                    </div>
                </div>
            </div>
        </div>
    <swiper
    :effect="'coverflow'"
    :direction="'vertical'"
    :loop='true'
    :grabCursor="true"
    :centeredSlides="true"
    :slidesPerView="'auto'"
    :coverflowEffect="{
      rotate: 30,
      stretch: -20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }"
    :pagination="true"
    :modules="modules"
    class="mySwiper"
    >   
        <swiper-slide
        ><img @click="changeDreamcar"
            :src="dreamcar" /></swiper-slide
        ><swiper-slide
        ><img @click="changebugatti"
            :src="bugatti" /></swiper-slide
        >
        <swiper-slide
        ><img @click="changeLamborghini"
            :src="lamborghini" /></swiper-slide
        ><swiper-slide
        ><img @click="changeHonda"
            :src="honda" /></swiper-slide
        ><swiper-slide
        ><img @click="changeTruck"
            :src="truck" /></swiper-slide
        ><swiper-slide
        ><img @click="changeMclaren"
            :src="mclaren" /></swiper-slide
        ><swiper-slide
        ><img @click="changejiotto"
            :src="jiotto" /></swiper-slide
        ><swiper-slide
        ><img @click="changeBmw"
            :src="bmw" /></swiper-slide
        >
    </swiper>
    </div>
</template>

<script>
import threejs from '../../js/threeJs'
import { ref, computed } from 'vue';
import { useStore } from "vuex";

import { EffectCoverflow, Pagination } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import CarImage from '../../js/threeJsImage'


export default {
    name: 'MainThreeJs',
    mounted() {
        threejs.startStore();
        threejs.createModel();
        this.callDarkMode();
    },

    unmounted() {
        threejs.observerOFF();
        window.location.reload();
    },

    setup() {
        const store = useStore();
        const progress = computed(() => store.state.progress);

        const loadingComplete = computed(() => store.state.loadingComplete);

        return {
            progress,
            loadingComplete,
            modules: [EffectCoverflow, Pagination],
        };
    },

    methods: {
        callDarkMode(){
            this.$emit('darkMode');
        },
        changeBmw() {
            threejs.changeBmw();
        },
        changeLamborghini() {
            threejs.changeLamborghini();
        },
        changeDreamcar() {
            threejs.changeDreamcar();
        },
        changeHonda() {
            threejs.changeHonda();
        },
        changebugatti() {
            threejs.changebugatti();
        },
        changeMclaren() {
            threejs.changeMclaren();
        },
        changejiotto() {
            threejs.changejiotto();
        },
        changeTruck() {
            threejs.changeTruck();
        },

        changeColorBasic() {
            threejs.changeColorBasic();
        },
        changeColorGreen() {
            threejs.changeColorGreen();
        },
        changeColorRed() {
            threejs.changeColorRed();
        },
        changeColorYellow() {
            threejs.changeColorYellow();
        },
        changeColorSkyblue() {
            threejs.changeColorSkyblue();
        },
        changeColorBlue() {
            threejs.changeColorBlue();
        },
        changeColorPink() {
            threejs.changeColorPink();
        },
        changeColorPurple() {
            threejs.changeColorPurple();
        },
        clickChange(index){
            this.ChangeMethodsArray[index]();
        }
    },

    data() {
        return {
            bmw: CarImage.bmw,
            dreamcar: CarImage.dreamcar,
            honda: CarImage.honda,
            bugatti: CarImage.bugatti,
            lamborghini: CarImage.lamborghini,
            mclaren: CarImage.mclaren,
            jiotto: CarImage.jiotto,
            truck: CarImage.truck,
            ColorHidden : true,
            ColorArray: ['white','#FF0000','#FF63F2','#A007ED','#0714FF','#07E4F4','#D7E23D','#00C91E'],
            ChangeMethodsArray :[this.changeColorBasic,this.changeColorRed,this.changeColorPink,this.changeColorPurple,this.changeColorBlue,this.changeColorSkyblue,this.changeColorYellow,this.changeColorGreen],
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },

}
</script>

<style scoped>
@import '../../css/MainThreeJs.css';
@import '../../css/Color.css';
</style>