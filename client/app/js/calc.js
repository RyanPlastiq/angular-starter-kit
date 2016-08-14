export default {
  sum: function() {
    var total = 0;
    var nums = Array.prototype.slice.call(arguments);
    nums.forEach(function(num) {
      total += num;
    });
    return total;
  },
  multiply: function(num1, num2) {
    return num1 * num2;
  },
  subtract: function(num1, num2) {
    return num1 - num2;
  },
  divide: function(num1, num2) {
    return num1 / num2;
  }
};

