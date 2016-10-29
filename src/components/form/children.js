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
