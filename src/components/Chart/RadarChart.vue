<template>
    <Radar :data="chartData" :options="chartOptions" />
</template>
  
<script lang="ts">

import { Radar } from 'vue-chartjs'
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(
    RadialLinearScale,
    PointElement,
    LineElement,
    Filler,
    Tooltip,
    Legend
)

export default {
    name: 'App',
    components: {
        Radar
    },
    data() {
        return {
            chartData: {
                labels: [
                    'Eating',
                    'Drinking',
                    'Sleeping',
                    'Designing',
                    'Coding',
                ],
                datasets: [
                    {
                        label: 'My First dataset',
                        backgroundColor: 'rgba(3, 120, 255, 0.2)',
                        borderColor: 'rgba(3, 120, 255, 1)',
                        pointBackgroundColor: 'rgba(100, 45, 175, 0.2)',
                        pointBorderColor: 'rgba(100, 45, 175, 1)',
                        pointBorderWidth: '2',
                        pointHoverBackgroundColor: 'rgba(233, 91, 144, 1)',
                        pointHoverBorderColor: 'rgba(179,181,198,1)',
                        data: [95, 96, 95, 98, 94]
                    },

                ]
            },

            chartOptions: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    r: {
                        beginAtZero: true,
                        pointLabels: {
                            display: true,
                        }
                    }
                },
            }

        }
    }
}
</script>
  