'use strict';

const info = require('.');
const assert = require('assert');

assert.notEqual(undefined, info);
assert.strictEqual('pkg-info', info.name);
assert.strictEqual('1.0.0', info.version);
assert.strictEqual('get package informations', info.description);
assert.strictEqual('git+https://github.com/aberwag/pkg-info.git', info.repository.url);
assert.strictEqual('git', info.repository.type);
assert.strictEqual('aberwag', info.author.name);
assert.strictEqual(undefined, info.author.url);
