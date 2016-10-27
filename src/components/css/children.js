import { createLoader } from '../../router/load'
const load = createLoader('css')

module.exports = [
    { path: '/breadcrumb', component: load('breadcrumb'), name: 'breadcrumb' },
    { path: '/button', component: load('button'), name: 'button' },
    { path: '/card', component: load('card'), name: 'card' },
    { path: '/chat', component: load('chat/chat-list'), name: 'chat' },
    { path: '/label', component: load('label'), name: 'label' },
    { path: '/list', component: load('list'), name: 'list' },
    { path: '/timeline', component: load('timeline/timeline-list'), name: 'timeline' }
]
