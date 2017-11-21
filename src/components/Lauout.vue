<template lang="pug">
.layout
  LineChart(
    :data="data"
    :options="options"
    :width="400"
    :height="200"
  )
</template>

<script>
import LineChart from '@/components/LineChart.js'
export default {
  name: 'Layout',
  components: {
    LineChart
  },
  data() {
    return {
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Cap',
            backgroundColor: '#e77',
            data: [
              { x: '2017-11-01', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-05', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-06', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-11', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-13', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-16', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-21', y: Math.round(Math.random() * 15 + 5) }
            ]
          },
          {
            label: 'Cascade',
            backgroundColor: '#7e7',
            data: [
              { x: '2017-11-01', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-05', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-06', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-11', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-13', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-16', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-21', y: Math.round(Math.random() * 15 + 5) }
            ]
          },
          {
            label: 'Sand',
            backgroundColor: '#77e',
            data: [
              { x: '2017-11-01', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-05', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-06', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-11', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-13', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-16', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-21', y: Math.round(Math.random() * 15 + 5) }
            ]
          },
          {
            label: 'Lake',
            backgroundColor: '#ee7',
            data: [
              { x: '2017-11-01', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-05', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-06', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-11', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-13', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-16', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-21', y: Math.round(Math.random() * 15 + 5) }
            ]
          },
          {
            label: 'Wooded',
            backgroundColor: '#7ee',
            data: [
              { x: '2017-11-01', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-05', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-06', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-11', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-13', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-16', y: Math.round(Math.random() * 15 + 5) },
              { x: '2017-11-21', y: Math.round(Math.random() * 15 + 5) }
            ]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: 'Any%RTA'
        },
        tooltips: {
          mode: 'index',
          intersect: false
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Realtime [min]'
            },
            ticks: {
              stepSize: 5
            },
            stacked: true
          }]
        }
      }
    }
  }
}
</script>
