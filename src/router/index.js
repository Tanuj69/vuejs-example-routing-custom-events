import Vue from 'vue'
import Router from 'vue-router'
import Adder from '@/components/Adder'
import Subtracter from '@/components/Subtracter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/adder' || '/',
      name: 'Adder',
      component: Adder
    },
    {
      path: '/subtracter',
      name: 'Subtracter',
      component: Subtracter
    }
  ]
})
