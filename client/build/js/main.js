(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _calc = require('./calc');

var _calc2 = _interopRequireDefault(_calc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('1');
console.log('helloo this is bundle.js');
console.log('2');
console.log(_calc2.default.multiply(2, 4));
console.log(_calc2.default.sum(2, 53, 6, 6));

},{"./calc":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
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

},{}],3:[function(require,module,exports){
'use strict';

var _bundle = require('./bundle');

var _bundle2 = _interopRequireDefault(_bundle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log('3');
console.log('This is the main.js');
console.log('4');

setTimeout(function () {
  document.getElementById('response').innerHTML = 'Hint: Check the console...';
}, 3000);

},{"./bundle":1}]},{},[3])


//# sourceMappingURL=main.js.map
