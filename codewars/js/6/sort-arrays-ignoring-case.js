// https://www.codewars.com/kata/sort-arrays-ignoring-case
// https://www.codewars.com/kata/51f41fe7e8f176e70d0002b9

var sortme = function( names ){
  return names.sort(function(a,b){return a.toLowerCase().localeCompare(b.toLowerCase())})
}
