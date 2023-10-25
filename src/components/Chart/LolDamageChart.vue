<template>
  <div class="size-max">
    <Bar
    id="BarChart"
    :options="chartOptions"
    :data="chartData"
    />
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)


export default {
  name: 'LolDamageChart',
  components: { Bar },
  computed: {
  },
  props : {
    chartData : Object,
    chartOptions  : Object,
  },

  data() {
    return {

    }
  },
}
</script>

<style>
.size-max{
  width:100%;
  height:100%;
}
</style>
