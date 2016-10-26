import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (name) {
  if (process.env.NODE_ENV === 'development') {
    return require('components/' + name + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + name + '.vue')(resolve)
    }
  }
}

const router = new VueRouter({
  routes: [
    { path: '/', component: load('index'), name: 'index' }, // Default
    { path: '*', component: load('error404') }, // Not found

    // TODO: generate!
    { path: '/breadcrumb', component: load('breadcrumb'), name: 'breadcrumb' },
    { path: '/button', component: load('button'), name: 'button' },
    { path: '/card', component: load('card'), name: 'card' },
    { path: '/chat', component: load('chat'), name: 'chat' },
    { path: '/list', component: load('list'), name: 'list' }
  ]
})

export default router

