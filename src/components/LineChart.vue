<template lang="pug">
canvas.line-chart
</template>

<script>
import Chart from 'chart.js'
export default {
  name: 'LineChart',
  data () {
    return {
      msg: 'Line Graph'
    }
  },
  mounted() {
    let vm = this
    let ctx = vm.$el.getContext('2d')
    let myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
          label: 'My First dataset',
          backgroundColor: 'rgba(255, 99, 132, 0.5)',
          borderColor: 'rgb(255, 99, 132)',
          lineTension: 0.2,
          data: [0, 10, 5, 2, 20, 30, 45]
        }]
      }
    })
    console.log(myChart)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}

canvas {
  background: #eee;
}
</style>
