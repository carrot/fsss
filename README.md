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

### License & Contributing

- Details on the license [can be found here](LICENSE)
- Details on running tests and contributing [can be found here](CONTRIBUTING.md)
