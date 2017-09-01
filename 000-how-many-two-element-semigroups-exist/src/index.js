//@flow
'use strict';
// The rationale behind using this idiom is described in:
//     http://stackoverflow.com/a/36628148/274677
//

if (!global._babelPolyfill) // https://github.com/s-panferov/awesome-typescript-loader/issues/121
    require('babel-polyfill'); // this is important as Babel only transforms syntax (e.g. arrow functions)
// so you need this in order to support new globals or (in my experience) well-known Symbols, e.g. the following:
//
//     console.log(Object[Symbol.hasInstance]);
//
// ... will print 'undefined' without the the babel-polyfill being required.


import {assert} from 'chai';

/*
 import {Point, between, foo} from './point.js';

 exports.Point   = Point;
 exports.between = between;
 exports.foo     = foo;

 import type {DemonstrateUseOfExportedTypes} from './point.js';

 export type {DemonstrateUseOfExportedTypes};


 const x: Point = new Point(2,3);

 const x2 = x.rotate90Right();

 console.log(x2.x+', '+x2.y);


 */


console.log('program start');


function zerofill(number, length) {
    // Setup
    var result = number.toString();
    var pad = length - result.length;

    while(pad > 0) {
        result = '0' + result;
        pad--;
    }

    return result;
}

function generateAllPossibleBinary2x2Functions(): Array<Array<Array<number>>> {
    const rv: Array<Array<Array<number>>> = [];
    for (var i: number = 0; i< 16; i++) {
        const base2 = i.toString(2);
        const padded = zerofill(base2,4);

        const bit3a = parseInt(padded[0]);
        const bit3b = (i >> 3) & 1;
        assert.strictEqual(bit3a, bit3b);

        const bit2a = parseInt(padded[1]);
        const bit2b = (i >> 2) & 1;
        assert.strictEqual(bit2a, bit2b);

        const bit1a = parseInt(padded[2]);
        const bit1b = (i >> 1) & 1;
        assert.strictEqual(bit1a, bit1b);

        const bit0a = parseInt(padded[3]);
        const bit0b = (i >> 0) & 1;
        assert.strictEqual(bit0a, bit0b);        
        
        rv.push([
            [ bit3a, bit2a],
            [ bit1a, bit0a]
        ]
               );
    }
    return rv;
}


function isAssociative(fmatrix: Array<Array<number>>): boolean {
    var allEqual = true;
    for (let i = 0; i < 2 ; i++) {
        for (let j = 0; j < 2 ; j++) {
            for (let k = 0; k < 2 ; k++) {
                const v1: number = fmatrix[fmatrix[i][j]][k];
                const v2: number = fmatrix[i][fmatrix[j][k]];
                if (v1 !== v2)
                    allEqual = false;
            }
        }
    }
    return allEqual;
}



const allPossibleBinary2x2Functions: Array<Array<Array<number>>> = generateAllPossibleBinary2x2Functions();

var n: number = 0;

for (let i = 0; i < allPossibleBinary2x2Functions.length ; i++) {
    if (isAssociative(allPossibleBinary2x2Functions[i]))
        n++;
}

console.log('\n\n\n\n\tThe number of 2-element semi-groups (including potentially isomorphic ones) is: '+n+'\n\n\n');
