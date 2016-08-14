(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var calc = require('./calc');
console.log('helloo this is main.js');

console.log(calc.multiply(2, 4));
console.log(calc.sum(2, 53, 6, 6));

},{"./calc":2}],2:[function(require,module,exports){
"use strict";

var obj = {
  sum: function sum() {
    var total = 0;
    var nums = Array.prototype.slice.call(arguments);
    nums.forEach(function (num) {
      total += num;
    });
    return total;
  },
  multiply: function multiply(num1, num2) {
    return num1 * num2;
  },
  subtract: function subtract(num1, num2) {
    return num1 - num2;
  },
  divide: function divide(num1, num2) {
    return num1 / num2;
  }
};

module.exports = obj;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
