import test from 'ava';

require('.')

var exec = require('co-exec');

test('log()', function * (t) {
  var result = yield exec('npm run log')
  // log(result)
  t.true(result.trim().match(/(glo)/).length > 1);
});


test('env-log()', function * (t) {
  var result = yield exec('npm run envlog')
  // log(result)
  t.true(result.trim().match(/(global\s+log\s+with\s+env)/).length > 1);
});


test('envlog-no-output()', function * (t) {
  var result = yield exec('npm run envlog-no-output')
  // log(result)
  t.true(result.match(/(global\s+log\s+with\s+env)/) == null);
});

