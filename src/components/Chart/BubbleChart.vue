<template>
    <Bubble 
    id="BubbleChart"
    :options="chartOptions" 
    :data="chartData" 
    />
</template>
  
<script>
import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    PointElement,
    LinearScale
} from 'chart.js'
import { Bubble } from 'vue-chartjs'

ChartJS.register(LinearScale, PointElement, Tooltip, Legend)

export default {
    name: 'App',
    components: {
        Bubble
    },

    data() {
        return {
            chartData: {
                datasets: [
                    {
                        label: 'First-DataSet',
                        backgroundColor: 'rgba(255, 121, 226, 0.2)',
                        borderColor: 'rgba(255, 121, 226, 1)',
                        hoverBorderColor:'rgba(243, 240, 235, 1)',
                        hoverBackgroundColor:'rgba(243, 240, 235, 0.2)',
                        data: [
                            {
                                x: 10,
                                y: 20,
                                r: 8,
                            },
                            {
                                x: 5,
                                y: 8,
                                r: 35,
                            },
                            {
                                x: 25,
                                y: 16,
                                r: 16
                            },
                            {
                                x: 20,
                                y: 12,
                                r: 25
                            },
                        ]
                    },
                    {
                        label: 'Second-DataSet',
                        backgroundColor: 'rgba(164, 121, 228, 0.2)',
                        borderColor: 'rgba(164, 121, 228, 1)',
                        hoverBorderColor:'rgba(243, 25, 11, 1)',
                        hoverBackgroundColor:'rgba(243, 25, 11, 0.2)',
                        data: [
                            {
                                x: 3,
                                y: 7,
                                r: 11,
                            },
                            {
                                x: 15,
                                y: 14,
                                r: 15,
                            },
                            {
                                x: 17,
                                y: 5,
                                r: 30
                            },
                            {
                                x: 9,
                                y: 14,
                                r: 30
                            },
                        ]
                    },
                ]
            },
            chartOptions: {
                responsive: true,
            }
        }
    }
}
</script>
  