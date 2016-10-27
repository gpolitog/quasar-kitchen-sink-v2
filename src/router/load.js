/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
export default function load (folder, name) {
  let path = folder
  if (folder && name) {
    path = folder + '/' + name
  }

  if (process.env.NODE_ENV === 'development') {
    return require('components/' + path + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + path + '.vue')(resolve)
    }
  }
}