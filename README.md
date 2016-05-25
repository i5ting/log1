# log1 = log for global、env or debug

[![npm version](https://badge.fury.io/js/log1.svg)](http://badge.fury.io/js/log1)

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
require('log1')('namespace')

var name = 'My App'

debug('booting %s', name);
```

exec show debug info

```
$ export DEBUG=namespace && node test/custom-debug.js
namespace custom booting My App +0ms
```

