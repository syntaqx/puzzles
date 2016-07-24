// https://www.codewars.com/kata/basic-js-calculating-averages
// https://www.codewars.com/kata/529f32794a6db5d32a00071f

var Calculator = {
  average: function () {
    return Array.prototype.slice.call(arguments).reduce(function (prev, next) {
      return prev + next;
    }, 0) / (arguments.length || 1);
  }
};
