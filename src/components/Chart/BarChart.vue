<template>
    <Bar
    id="BarChart"
    :options="chartOptions"
    :data="chartData"
    />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'BarChart',
  components: { Bar },
  computed: {
  },
  data() {
    return {
      chartData: {
        labels: [ 'January', 'February', 'March','이름' ],
        datasets: [ 
          { 
            label:'First-DataSet',
            backgroundColor: 'red',
            data: [30, 20, 9,25] 
          },
          { 
            label:'Second-DataSet',
            backgroundColor: 'green',
            data: [28, 17, 15,20] 
          },
          { 
            label:'Third-DataSet',
            backgroundColor: 'blue',
            data: [32, 15, 8,23] 
          }  
        ]
      },
      chartOptions: {
        responsive: true,
      }
    }
  }
}
</script>

<style>
</style>
