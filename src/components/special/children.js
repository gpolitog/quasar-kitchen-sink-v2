import { createLoader } from '../../router/load'
const load = createLoader('special')

module.exports = [
    { path: '/action-sheet', component: load('action-sheet'), name: 'action-sheet' },
    { path: '/dialog', component: load('dialog'), name: 'dialog' },
    { path: '/toast', component: load('toast'), name: 'toast' },
    { path: '/loading', component: load('loading'), name: 'loading' }
]
