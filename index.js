global.log = console.log

module.exports = function (name, opt) {
  //
  global.debug = require('debug')(name ? name : 'log1');
  
  if (process.env.NODE_ENV === 'production') {
    log(process.env.NODE_ENV)
    global.log = function(t){}
  }
}