// https://www.codewars.com/kata/broken-greetings
// https://www.codewars.com/kata/50654ddff44f800200000001

function Person(name){
  this.name = name;
}

Person.prototype.greet = function(otherName){
  return "Hi " + otherName + ", my name is " + this.name;
}
