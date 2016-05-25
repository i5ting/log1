# log1 = log for global、env or debug


[![Build](https://travis-ci.org/i5ting/log1.svg?branch=master)](https://travis-ci.org/i5ting/log1) [![npm version](https://badge.fury.io/js/log1.svg)](http://badge.fury.io/js/log1)


make all console.xx to global

- log
- info
- warn
- error
- dir
- time
- timeEnd
- trace
- assert
- debug(optional https://github.com/visionmedia/debug)

## global log

```
require('log1')

log('global log')
```

## global log with env

```
require('log1')()

log('global log')
```

when `NODE_ENV=production`，will not print any log

```
export NODE_ENV=production && node test.js
```

otherwise，print log

## global log disable

```
require('log1')(true)

log('global log')
```

this will not print any log

```
export NODE_ENV=production && node test/log-disable.js
```

## use debug module

https://github.com/visionmedia/debug

### use log1 namespace as default

```
require('log1')()

var name = 'My App'

debug('booting %s', name);
```

exec show debug info

```
$ export DEBUG=log1 && node test/debug.js
log1 booting My App +0ms
```

### use custom namespace

```
require('log1')(true, 'namespace')

var name = 'My App'

debug('booting %s', name);
```

exec show debug info

```
$ export DEBUG=namespace && node test/custom-debug.js
namespace custom booting My App +0ms
```

