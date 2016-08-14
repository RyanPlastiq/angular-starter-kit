import calc from './calc';
console.log('1');
console.log('helloo this is bundle.js');
console.log('2');
console.log(calc.multiply(2,4));
console.log(calc.sum(2,53,6,6));


//Here is the arrow function!
var test = (a, b) => {
  console.log(a);
  console.log(b);
};

test('yay', 'arrows!');