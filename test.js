import test from 'ava';

require('.')

var exec = require('co-exec');

test('log()', function * (t) {
  var result = yield exec('npm run log')
  // log(result)
  t.regex(result, /(global)/);
});

test('log-disable()', function * (t) {
  var result = yield exec('npm run log-disable')
  // log(result)
  t.false(result === null);
});

test('env-log()', function * (t) {
  var result = yield exec('npm run envlog')
  // log(result)
  t.regex(result, /(global\s+log\s+with\s+env)/);
});


test('envlog-no-output()', function * (t) {
  var result = yield exec('npm run envlog-no-output')
  // log(result)
  t.true(result.match(/(global\s+log\s+with\s+env)/) == null);
});

