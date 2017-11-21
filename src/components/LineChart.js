import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  name: 'LineChart',
  props: [ 'data', 'options' ],
  mounted() {
    this.renderChart(this.data, this.options)
  }
}
