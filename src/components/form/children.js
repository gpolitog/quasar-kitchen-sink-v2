import { createLoader } from '../../router/load'
const load = createLoader('form')

const components = [
  'checkbox',
  'datetime',
  'double-range',
  'knob',
  'numeric',
  'radio',
  'range',
  'rating',
  'select',
  'select-dialog',
  'text-area',
  'textbox'
]

module.exports = components.map(name => {
  return {path: '/' + name, component: load(name), name}
})

//   { path: '/checkbox', component: load('checkbox'), name: 'checkbox' },
//   { path: '/datetime', component: load('datetime'), name: 'datetime' },
//   { path: '/double-range', component: load('double-range'), name: 'double-range' },
//   { path: '/knob', component: load('knob'), name: 'knob' },
//   { path: '/numeric', component: load('numeric'), name: 'numeric' },
//   { path: '/radio', component: load('radio'), name: 'radio' },
//   { path: '/range', component: load('range'), name: 'range' },
//   { path: '/rating', component: load('rating'), name: 'rating' },
//   { path: '/select', component: load('select'), name: 'select' },
//   { path: '/select-dialog', component: load('select-dialog'), name: 'select-dialog' },
//   { path: '/text-area', component: load('text-area'), name: 'text-area' },
//   { path: '/textbox', component: load('textbox'), name: 'textbox' }
// ]
