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
import moment from 'moment'
import LineChart from '@/components/LineChart.js'

function newDate(days) {
  return moment().add(days, 'd').toDate()
}

export default {
  name: 'Layout',
  components: {
    LineChart
  },
  data() {
    return {
      data: {
        labels: [
          newDate(0),
          newDate(2),
          newDate(4),
          newDate(5),
          newDate(10),
          newDate(13),
          newDate(14)
        ],
        datasets: [
          {
            label: 'Cap',
            backgroundColor: 'rgba(244, 67, 36, 0.3)',
            data: [
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5)
            ]
          },
          {
            label: 'Cascade',
            backgroundColor: 'rgba(233, 30, 99, 0.3)',
            data: [
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5)
            ]
          },
          {
            label: 'Sand',
            backgroundColor: 'rgba(156, 39, 176, 0.3)',
            data: [
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5),
              Math.round(Math.random() * 15 + 5)
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
          mode: 'index'
        },
        elements: {
          line: {
            tension: 0.1
          }
        },
        scales: {
          xAxes: [{
            type: 'time',
            time: {
              tooltipFormat: 'YYYY/MM/DD HH:mm'
            },
            scaleLabel: {
              display: true,
              labelString: 'Date'
            },
            gridLines: {
              display: true
            },
            stacked: true
          }],
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Realtime [min]'
            },
            ticks: {
              stepSize: 10
            },
            gridLines: {
              display: true
            },
            stacked: true
          }]
        }
      }
    }
  }
}
</script>
