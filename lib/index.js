var fs = require('fs')
  , Promise = require('bluebird');

module.exports = (function (){

  var file = {};

  for (var key in fs) {
    if (/^([a-zA-Z]+)Sync$/.test(key)) {
      file[key] = fs[key];
    } else {
      file[key] = (function (key) {
        return function () {
          return fn(fs[key], Array.prototype.slice.call(arguments, 0));
        }
      }(key));
    }
  }

  function fn (fn, args) {
    return new Promise(function (resolve, reject) {
      args.push(function (error) {
        !!error ? reject(error) : resolve(arguments[1]);
      });
      return fn.apply(null, args);
    });
  }

  return file;

}());
