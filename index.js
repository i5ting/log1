global_log()

module.exports = function (disable, name) {
  // for debug
  global.debug = require('debug')(name ? name : 'log1');
  
  if (disable === true) {
    _reset_log ()
  }
  
  if (process.env.NODE_ENV === 'production') {
    _reset_log ()
  }
}

function _reset_log () {
  for(var k in console){ 
    global[k] = function(t){}
  }
}

function global_log () {
  for(var k in console){ 
    global[k] = console[k]
  }
}