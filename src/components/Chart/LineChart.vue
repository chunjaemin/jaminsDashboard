<template>
    <Line :data="chartData" :options="chartOptions" />
</template>
  
<script lang="ts">
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'

ChartJS.register(CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend)

export default {
    name: 'LineChart',
    components: {
        Line
    },

    mounted(){

    },
    methods : {

    },

    data() {
        return {
            chartData: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [
                    {
                        label: 'Data One',
                        data: [30, 39, 10, 40, 35, 80, 40]
                    }
                ]
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: true,
                tension:0.4,
                backgroundColor:'rgba(0, 210, 54, 0.1)',
                fill:true,
                borderColor:'#7AF67A',
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        }
    }
}
</script>
  