var path = require('path')
module.exports = function() {
  return {
    context: path.resolve('test'),
    entry: ['./index.js'],
    output: {
      filename: 'index.test.js',
      path: path.resolve('.')
    },
    externals: {
      tape: 'commonjs tape'
    }
  }
}