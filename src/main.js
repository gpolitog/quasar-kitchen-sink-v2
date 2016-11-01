import Vue from 'vue'
import Quasar from 'quasar'
import router from './router'
import App from './App'
// import components from './components'

// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require('./themes/app.' + __THEME + '.styl')
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require('quasar/dist/quasar.' + __THEME + '.css')
// ==============================

const highlightTheme = 'gruvbox-dark'
require('highlight.js/styles/' + highlightTheme + '.css')

Quasar.theme.set(__THEME)
Vue.use(Quasar) // Install Quasar Framework

import CodeDisplay from './components/global/code-display'

// const log = console.log

// Ideally iterate through global components!
// Vue.component('code-display', components.global.CodeDisplay)
Vue.component('code-display', CodeDisplay)

import { default as toolbars } from './components/layouts/toolbars'
const {LeftMenu, RightMenu, DoubleMenu} = toolbars

// make toolbars into global components
Vue.component('left-menu', LeftMenu)
Vue.component('right-menu', RightMenu)
Vue.component('double-menu', DoubleMenu)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#quasar-app',
    router,
    render: h => h(App)
  })
})
