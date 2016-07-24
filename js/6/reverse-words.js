// https://www.codewars.com/kata/reverse-words
// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4

function reverseWords(str) {
  return str.split(' ').map(function(value){ return value.split('').reverse().join(''); }).join(' ');
}
