// https://www.codewars.com/kata/javascript-class-like-objects
// https://www.codewars.com/kata/513e1e47c600c93cef000001

var Animal = function(name, type) {
  this.name = name;
  this.type = type;
};

Animal.prototype.toString = function () {
  return this.name + ' is a ' + this.type;
};