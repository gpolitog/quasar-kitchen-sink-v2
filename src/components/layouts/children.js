import { createLoader } from '../../router/load'
const load = createLoader('layouts')

const components = [
  'drawers',
  'tabs',
  'toolbars'
]

module.exports = components.map(name => {
  return {path: '/' + name, component: load(name), name}
})

