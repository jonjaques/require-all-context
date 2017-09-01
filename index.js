const camelCase = require('lodash/camelCase')
const set = require('lodash/set')
const options = { formatKey: camelCase, ext: '.js' }

module.exports = function requireAllContext(context, opts) {
  const modules = {}
  const o = Object.assign({}, options, opts || {})
  
  context.keys().map(key => {
    const modulePath = key
      .replace(/\.\//gi, '')
      .replace(o.ext, '')
      .split('/')
      .map(k => o.formatKey(k))
      .join('.')
    set(modules, modulePath, context(key))
  })

  return modules
}