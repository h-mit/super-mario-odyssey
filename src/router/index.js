import Vue from 'vue'
import Router from 'vue-router'
import Lauout from '@/components/Lauout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Lauout',
      component: Lauout
    }
  ]
})
