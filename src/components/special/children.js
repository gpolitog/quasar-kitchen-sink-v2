import { createLoader } from '../../router/load'
const load = createLoader('special')

const components = [
  'action-sheet',
  'dialog',
  'toast',
  'loading'
]

module.exports = components.map(name => {
  return {path: '/' + name, component: load(name), name}
})

