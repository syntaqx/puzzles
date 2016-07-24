// https://www.codewars.com/kata/adjacent-pairs-in-a-string
// https://www.codewars.com/kata/5245a9138ca049e9a10007b8

function countAdjacentPairs(searchString) {
  var result = searchString.match(/(\b\w+)\s\1/ig);
  return result == null ? 0 : result.length;
}
