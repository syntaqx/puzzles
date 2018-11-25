#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Problem 10 - Summation of primes
# https://projecteuler.net/problem=10
#
# The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
#
# Find the sum of all the primes below two million.

limit = 2000000
total = 0

# Generate an infinite sequence of prime numbers.
# Sieve of Eratosthenes
# Code by David Eppstein, UC Irvine, 28 Feb 2002
# http://code.activestate.com/recipes/117119/
def get_primes():
    D = {}
    q = 2

    while True:
        if q not in D:
            yield q
            D[q * q] = [q]
        else:
            for p in D[q]:
                D.setdefault(p + q, []).append(p)
            del D[q]

        q += 1

for prime in get_primes():
    if (prime >= limit):
        break

    total += prime

print total

# Congratulations, the answer you gave to problem 10 is correct.
# You are the 164468th person to have solved this problem.