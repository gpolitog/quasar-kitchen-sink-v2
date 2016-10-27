import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import routes from './routes'

console.log('routes', routes[2], routes[3])

const router = new VueRouter({
  routes
})

export default router

