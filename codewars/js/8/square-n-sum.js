// https://www.codewars.com/kata/square-n-sum
// https://www.codewars.com/kata/515e271a311df0350d00000f

function squareSum(numbers) {
  return numbers.reduce(function(sum, n){
    return (n*n) + sum;
  }, 0)
}
