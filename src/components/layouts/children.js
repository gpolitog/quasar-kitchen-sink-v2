import { createLoader } from '../../router/load'
const load = createLoader('layouts')

module.exports = [
    { path: '/drawers', component: load('drawers'), name: 'drawers' },
    { path: '/tabs', component: load('tabs'), name: 'tabs' },
    { path: '/toolbars', component: load('toolbars'), name: 'toolbars' }
]
