// https://www.codewars.com/kata/ready-for-prime-time
// https://www.codewars.com/kata/521ef596c106a935c0000519

function prime(num) {
  var sieve = [], i, j, primes = []

  for (i = 2; i <= num; ++i) {
    if (!sieve[i]) {
      primes.push(i);

      for (j = i << 1; j <= num; j += i) {
        sieve[j] = true;
      }
    }
  }

  return primes
}
