// https://www.codewars.com/kata/use-reduce-to-calculate-the-sum-of-the-values-in-an-array
// https://www.codewars.com/kata/532b4057484b0e58e8000766

function sum(array) {
  return array.reduce(function(previous, current) {
    return previous + current;
  });
}
