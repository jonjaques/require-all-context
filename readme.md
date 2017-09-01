# Require All for Webpack contexts

[![Build Status](https://travis-ci.org/jonjaques/require-all-context.svg?branch=master)](https://travis-ci.org/jonjaques/require-all-context)


## Usage

`requireAll(context: WebpackContext, options?: Options)`

```ts
interface Options {
  ext: string;
  formatKey(x: string): string;
}
```

```js
const requireAll = require('require-all-context')
var stuffContext = require.context('./stuff', true, /\.js$/)
var stuff = requireAll(stuffContext)
```


## Output

The following directory structure

```
/stuff
  bar.js
  foo.js
  /nested
    zap.js
    /weirdly-named-folder
      things.js
```

produces the following object

```json
{ 
  bar: ..., 
  foo: ..., 
  nested: {
    zap: ...,
    weirdlyNamedFolder: {
      things: ...
    }
  } 
}
```
