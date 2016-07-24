// https://www.codewars.com/kata/prime-numbers
// https://www.codewars.com/kata/52dd72494367608ac1000416

function isPrime(number) {
  if (number < 2) return false;

  var q = Math.sqrt(number);

  for (var i = 2; i <= q; i++) {
    if (number % i == 0) {
      return false;
    }
  }

  return true;
}

function getPrimes(start, finish) {
  var cache, ret = [];

  if (start > finish) {
    cache = finish;
    finish = start;
    start = cache;
  }

  for (; start <= finish; start++) {
    if (isPrime(start)) {
      ret.push(start)
    }
  }

  return ret
}
