// https://www.codewars.com/kata/no-oddities-here
// https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce

function noOdds(values) {
  return values.filter(function(i) {
  	return i % 2 == 0;
  });
}
