import { load } from './load'

export default [
  { path: '/', component: load('index'), name: 'root' }, // Default
  { path: '*', component: load('error404') } // Not found
]
