<template>
    <Doughnut id="BubbleChart" :options="chartOptions" :data="chartData" />
</template>
  
<script>
import { Doughnut } from 'vue-chartjs'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Doughnut
    },
    data() {
        return {
            chartData : {
                labels: ['VueJs', 'EmberJs', 'ReactJs', 'AngularJs','JAbascript'],
                datasets: [
                    {
                        borderColor:['rgba(255, 72, 76, 1)','rgba(147, 20, 255, 1)','rgba(73, 60, 255, 1)','rgba(56, 199, 127, 1)','rgba(255, 255, 0, 1)'],
                        backgroundColor: ['rgba(255, 72, 76, 0.3)', 'rgba(147, 20, 255, 0.3)', 'rgba(73, 60, 255, 0.3)', 'rgba(56, 199, 127, 0.3)','rgba(255, 255, 0, 0.3)'],
                        data: [40, 40, 50, 40,50],
                    },
                ]
            },

            chartOptions : {
                responsive: true,
                maintainAspectRatio: false,
                borderAlign:'center',
                hoverOffset:50,
            }
        }
    }
}
</script>
  