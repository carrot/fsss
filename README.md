fsss
====

A wrapper for Node's `fs()` module; asynchronous functions return promises.

### Installation

```
$ npm install fsss --save
```

### Usage

```javascript
var fs = require('fsss');
var filename = 'filename';
fs.exists(filename)
  .then(function (exists) {
    if (exists) {
      return fs.readFile(filename);
    }
  })
  .catch(function (error) {
    console.error(error);
  });
```
