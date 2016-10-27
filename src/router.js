import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
function load (folder, name) {
  let path = folder
  if (folder && name) {
    path = folder + '/' + name
  }

  if (process.env.NODE_ENV === 'development') {
    return require('components/' + path + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + path + '.vue')(resolve)
    }
  }
}

const router = new VueRouter({
  routes: [
    { path: '/', component: load('index'), name: 'index' }, // Default
    { path: '*', component: load('error404') }, // Not found

    { path: '/css', component: load('css', 'index'), name: 'css' },
    { path: '/form', component: load('form', 'index'), name: 'form' },    

    // TODO: generate!
    // TODO: move to css/index and form/index !?
    { path: '/breadcrumb', component: load('css', 'breadcrumb'), name: 'breadcrumb' },
    { path: '/button', component: load('css', 'button'), name: 'button' },
    { path: '/card', component: load('css', 'card'), name: 'card' },
    { path: '/chat', component: load('css', 'chat/chat-list'), name: 'chat' },
    { path: '/label', component: load('css', 'label'), name: 'label' },
    { path: '/list', component: load('css', 'list'), name: 'list' },
    { path: '/timeline', component: load('css', 'timeline/timeline-list'), name: 'timeline' }
  ]
})

export default router

