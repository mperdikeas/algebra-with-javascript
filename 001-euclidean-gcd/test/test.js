/* @flow */
require('source-map-support').install();
import 'babel-polyfill';
import {assert} from 'chai';

import {gcd} from '../src/gcd.js';

describe('gcd', function () {
    it('should fail for 0 and 0'
       , function () {
           assert.throws(function() {
               let d: number = gcd(1.1, 1);
           }, Error);
       });    
    it('should fail for 1.1 and 1'
       , function () {
           assert.throws(function() {
               let d: number = gcd(1.1, 1);
           }, Error);
       });
    it('should work for 1 and 0'
       , function () {
           let d: number = gcd(1, 0);
           assert.strictEqual(1, d);
       });
    it('should work for -1 and 0'
       , function () {
           let d: number = gcd(-1, 0);
           assert.strictEqual(1, d);
       });
    it('should work for -1 and -1'
       , function () {
           let d: number = gcd(-1, -1);
           assert.strictEqual(1, d);
       });            
    it('should work for 100 and 70'
       , function () {
           let d: number = gcd(100, 70);
           assert.strictEqual(10, d);
       });
    it('should work for 945 and 2415'
       , function () {
           let d: number = gcd(945, 2415);
           assert.strictEqual(105, d);
       });
    it('should work for -945 and 2415'
       , function () {
           let d: number = gcd(-945, 2415);
           assert.strictEqual(105, d);
       });
    it('should work for -945 and -2415'
       , function () {
           let d: number = gcd(-945, -2415);
           assert.strictEqual(105, d);
       });        
    it('should work for 50 and 100'
       , function () {
           let d: number = gcd(50, 100);
           assert.strictEqual(50, d);
       });    
});


