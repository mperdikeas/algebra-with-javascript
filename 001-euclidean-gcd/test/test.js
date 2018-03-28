/* @flow */
require('source-map-support').install();
import 'babel-polyfill';
import {assert} from 'chai';

import {gcd, sortedUnique} from '../src/gcd.js';

describe('gcd', function () {
    it('should work'
       , function () {
           assert.deepEqual([], sortedUnique([]));
           assert.deepEqual([1], sortedUnique([1,1,1,1,1]));
           assert.deepEqual([1,2,3], sortedUnique([3,1,3,3,3,2,1,1,1]));
       });
});


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
    it('should work for -15 and -100'
       , function () {
           let d: number = gcd(-15, -100);
           assert.strictEqual(5, d);
       });            
    it('should work for 50 and 100'
       , function () {
           let d: number = gcd(50, 100);
           assert.strictEqual(50, d);
       });
    it('should work for a bunch of more complex cases with more than 2 arguments'
       , function () {
           assert.strictEqual(25, gcd(50, 100, 25));
           assert.strictEqual(10, gcd(80, -100, 90));
           assert.strictEqual(10, gcd(-80, -100, 9000, -3250));
           assert.strictEqual(25, gcd(200, -125, 75, -3225));
       });
    it('should work for some edge cases'
       , function () {
           assert.strictEqual(42, gcd(42));
           assert.strictEqual(1, gcd(-1,-1,-1));
           assert.strictEqual(10, gcd(10, 10, 10, 10));
       });
    it('should fail as expected for a bunch of other erroneous cases'
       , function () {
           assert.throws(function() {
               let d: number = gcd(0,0,0);
           }, Error);
           assert.throws(function() {
               let d: number = gcd();
           }, Error);
           assert.throws(function() {
               let d: number = gcd(0);
           }, Error);
           assert.throws(function() {
               // $SuppressFlowFinding:
               let d: number = gcd('0');
           }, Error);
           assert.throws(function() {
               // $SuppressFlowFinding:               
               let d: number = gcd(1,2,3,4,'foobar', 5);
           }, Error);
           assert.throws(function() {
               let d: number = gcd(1,2,3,4,5.00001);
           }, Error);                                 
       });            
});


