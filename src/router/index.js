import Vue from 'vue'
import Router from 'vue-router'
import LineChart from '@/components/LineChart'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'LineChart',
      component: LineChart
    }
  ]
})
