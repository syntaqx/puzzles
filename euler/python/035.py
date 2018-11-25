#!/usr/bin/env python

# Problem 35 - Circular primes
# https://projecteuler.net/problem=35
#
# The number, 197, is called a circular prime because all rotations of the
# digits: 197, 971, and 719, are themselves prime.
#
# There are thirteen such primes below 100:
#
#     2, 3, 5, 7, 11, 13, 17, 31, 37, 71, 73, 79, and 97.
#
# How many circular primes are there below one million?

from re import match
from math import ceil

def get_primes(n):
    primes     = [True] * n
    primes[0]  = False
    primes[1]  = False
    prime_list = []
    round_up   = lambda n, prime: int(ceil(float(n) / prime))

    for current in range(2, n):
        if not primes[current]:
            continue

        prime_list.append(current)

        for multiplicant in range(2, round_up(n, current)):
            primes[multiplicant * current] = False

    return primes

def is_circular_prime(primes, number):
    number = str(number)

    for i in range(0, len(number)):
        rotated = number[i:len(number)] + number[0:i]

        if not primes[int(rotated)]:
            return False

    return True

limit  = 1000000
total  = 2
primes = get_primes(limit)

for prime, is_prime in enumerate(primes):
    if not is_prime or match('[246805]+', str(prime)) != None:
        continue

    if is_circular_prime(primes, prime):
        total += 1

print total

# Congratulations, the answer you gave to problem 35 is correct.
# You are the 47396th person to have solved this problem.