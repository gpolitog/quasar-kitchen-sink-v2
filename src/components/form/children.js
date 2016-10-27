import { createLoader } from '../../router/load'
const load = createLoader('form')

module.exports = [
    { path: '/checkbox', component: load('checkbox'), name: 'checkbox' },
    { path: '/datetime', component: load('datetime'), name: 'datetime' },
    { path: '/textbox', component: load('textbox'), name: 'textbox' }
]
