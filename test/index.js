const test = require("tape")
const requireAll = require("../")

const fixture = requireAll(require.context('./fixtures', true, /\.js$/))

test('produces valid correct object', function(t) {
  t.deepEqual(fixture, { 
    a: 'a',
    b: 'b',
    complexName: 42,
    nested: { file: 'nested file' } 
  })
  t.end()
})