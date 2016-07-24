// https://www.codewars.com/kata/split-strings
// https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

function solution(str){
   var matches = str.match(/.{1,2}/g),
       last    = matches.length - 1

   if (matches[last].length == 1) matches[last] += '_'
   return matches
}
