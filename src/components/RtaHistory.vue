<template lang="pug">
.rta-history
  h1 My SMO RTA history
  LineChart(
    :chart-data="data"
    :options="options"
    :width="400"
    :height="300"
  )
</template>

<script>
import moment from 'moment'
import X2JS from 'x2js'
import materialColors from 'material-colors'
import LineChart from '@/components/LineChart.js'
import api from '@/api'

export default {
  name: 'Layout',
  components: {
    LineChart
  },
  created() {
    let x2js = new X2JS()
    api.fetchSplit()
      .then(response => {
        let split = x2js.xml2js(response.data)
        this.generateData(split)
      })
  },
  data() {
    return {
      data: null,
      options: {
        tooltips: {
          mode: 'index'
        },
        elements: {
          line: {
            tension: 0
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
              min: 60
            },
            gridLines: {
              display: true
            },
            stacked: true
          }]
        }
      }
    }
  },
  methods: {
    // マテリアルカラーをrgba()形式で返す
    getMaterialColor(index, alpha) {
      let colors = [
        materialColors.red['500'],
        materialColors.pink['500'],
        materialColors.purple['500'],
        materialColors.deepPurple['500'],
        materialColors.indigo['500'],
        materialColors.blue['500'],
        materialColors.lightBlue['500'],
        materialColors.cyan['500'],
        materialColors.teal['500'],
        materialColors.green['500'],
        materialColors.lightGreen['500'],
        materialColors.lime['500'],
        materialColors.yellow['500'],
        materialColors.amber['500'],
        materialColors.orange['500'],
        materialColors.deepOrange['500']
      ].map(color => {
        const r = parseInt(color.substr(1, 2), 16)
        const g = parseInt(color.substr(3, 2), 16)
        const b = parseInt(color.substr(5, 2), 16)
        return `rgba(${r}, ${g}, ${b}, ${alpha})`
      })
      return colors[index % colors.length]
    },

    // Splitデータからグラフ用のデータを作成
    generateData({ Run }) {
      // 返却用のオブジェクトを作成
      let data = {
        labels: [],
        datasets: []
      }

      // データの格納場所を作成
      data.datasets.push({
        label: Run.CategoryName,
        backgroundColor: this.getMaterialColor(0, 0.5),
        data: []
      })

      // グラフ用のデータを格納する
      const attemptCount = Number(Run.AttemptCount)
      const attemptHistory = Run.AttemptHistory.Attempt
      let startIndex = 0
      if (attemptCount < attemptHistory.length) {
        startIndex = attemptHistory.length - attemptCount
      }
      const dateFormat = 'MM/DD/YYYY HH:mm:ssZ'
      for (let i = startIndex; i < attemptHistory.length; i++) {
        const element = attemptHistory[i]
        // 通した記録だけを格納
        if (element.RealTime != null) {
          // 時刻をラベルに追加
          let endedDate = moment(element._ended + 'Z', dateFormat).toDate()
          data.labels.push(endedDate)

          // タイムのデータを追加
          let time = moment.duration(element.RealTime).asMinutes()
          data.datasets[0].data.push(time)
        }
      }
      this.data = data
    }
  }
}
</script>
