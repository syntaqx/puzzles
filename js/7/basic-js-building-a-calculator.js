// https://www.codewars.com/kata/basic-js-building-a-calculator
// https://www.codewars.com/kata/529f2d1c403a58f660000656

var Calculator = {
  calc: function (data, op) {
    data = Array.prototype.slice.call(data, 0)
    return (op == '/' && data.indexOf(0) > -1) ? false : eval(data.join(op));
  },

  add:      function () { return this.calc(arguments, '+') },
  subtract: function () { return this.calc(arguments, '-') },
  multiply: function () { return this.calc(arguments, '*') },
  divide:   function () { return this.calc(arguments, '/') }
};
