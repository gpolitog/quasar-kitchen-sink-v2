import load from './load'

export default [
  { path: '/', component: load('index'), name: 'index' }, // Default
  { path: '*', component: load('error404') }, // Not found
]
