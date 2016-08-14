import bundle from './bundle';
console.log('3');
console.log('This is the main.js');
console.log('4');


setTimeout(function() {
  document.getElementById('response').innerHTML = 'Hint: Check the console...';
}, 3000);