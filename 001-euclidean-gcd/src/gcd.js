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


function sortedUnique(_xs: Array<number>): Array<number> {
    const xs = _xs.slice();
    return xs.sort().filter( (v, idx, arr)=> {
        return (idx == 0) || (arr[idx] != arr[idx-1]);
    });
}

function gcd(...n : Array<number>) {
    const nsuniq = sortedUnique(n);
    if (nsuniq.length===0)
        throw new Error('at least one integer must be supplied');
    else if ((nsuniq.length==1) && (nsuniq[0]===0))
        throw new Error('integers cannot all be zero');
    else if (nsuniq.filter(x=> ((typeof x !== typeof 0) || (x%1!=0))).length>0)
        throw new Error('arguments must be all integers');
    else if (nsuniq.length==1)
        return Math.abs(nsuniq[0]);
    else
        return nsuniq.slice(1).reduce( (x,y)=>gcd2(Math.abs(x), Math.abs(y)), nsuniq[0] );
        
}

function gcd2(a: number,b: number): number {
    if (b>a)
        return gcd2(b, a);
    else {
        if (b===0)
            return a;
        else {
            const r = a % b;
            return gcd2(b, r);
        }
    }
}

exports.sortedUnique = sortedUnique;
exports.gcd = gcd;

