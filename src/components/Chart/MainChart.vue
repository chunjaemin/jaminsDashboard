<template>
    <div class="main-container">
        <div class="flex-container">
            <div class="col-12 col-md-6">
                <div class="content-container primary-color">
                    <bubble-chart />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="content-container primary-color">
                    <line-chart />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="content-container primary-color">
                    <radar-chart />
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="content-container primary-color">
                    <donut-chart />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
//컴포넌트 import하는곳
import BubbleChart from './BubbleChart.vue'
import LineChart from './LineChart.vue'
import DonutChart from './DonutChart.vue'
import RadarChart from './RadarChart.vue'
//컴포넌트 import끝

export default {
    name: 'MainChart',
    mounted(){
        this.callDarkMode();
    },
    methods:{
        callDarkMode(){
            this.$emit('darkMode');
        },
    },
    data(){
			return{
                bar_hidden :false,
			}
		},
    components: {
        BubbleChart,
        LineChart,
        DonutChart,
        RadarChart,
    },

}
</script>

<style>/**css import하는곳 */
    @import '../../css/MainChart.css';
</style>