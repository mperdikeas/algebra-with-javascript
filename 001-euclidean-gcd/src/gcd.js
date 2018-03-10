// @flow
require('source-map-support').install();

'use strict';

// The rationale behind using this idiom is described in:
//     http://stackoverflow.com/a/36628148/274677
//
if (!global._babelPolyfill) // https://github.com/s-panferov/awesome-typescript-loader/issues/121
    require('babel-polyfill');
// The above is important as Babel only transforms syntax (e.g. arrow functions)
// so you need this in order to support new globals or (in my experience) well-known Symbols, e.g. the following:
//
//     console.log(Object[Symbol.hasInstance]);
//
// ... will print 'undefined' without the the babel-polyfill being required.



import {assert} from 'chai';

function gcd(a: number,b: number): number {
    assert.isTrue(typeof a === typeof 0 && typeof b === typeof 0 && a % 1 === 0 && b % 1 === 0);
    assert.isFalse(a===0 && b===0);
    return _gcd(Math.abs(a), Math.abs(b));
}


function _gcd(a: number,b: number): number {
    assert.isTrue(a>=0 && b>=0);
    console.log(`gcd(${a}, ${b})`);
    if (b>a)
        return _gcd(b, a);
    else {
        if (b===0)
            return a;
        else {
            const q = Math.floor(a/b);
            const r = a - b*q;
            assert.strictEqual(a,  q*b + r);
            return _gcd(b, r);
        }
    }
}


exports.gcd = gcd;

