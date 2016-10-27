/*
  Avoid lazy loading while in dev mode
  to benefit from HMR
 */
export function load (name, folder) {
  const path = folder ? [folder, name].join('/') : name

  if (process.env.NODE_ENV === 'development') {
    return require('components/' + path + '.vue')
  }
  else {
    return (resolve) => {
      require('bundle?lazy!components/' + path + '.vue')(resolve)
    }
  }
}

export function createLoader (folder) {
  return function (name) {
    return load(name, folder)
  }
}
