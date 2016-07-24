#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Problem 1 - Multiples of 3 and 5
# https://projecteuler.net/problem=1
#
# If we list all of the natural numbers below 10 that are multiples of 3 or 5,
# we get 3, 5, 6 and 9. The sum of these multiples is 23.
#
# Find the sum of all the multiples of 3 or 5 below 1000

total = 0

for x in range(1, 1000):
    if (x % 3 == 0) or (x % 5 == 0):
        total += x

print total

# Congratulations, the answer you gave to problem 1 is correct.
# You are the 413770th person to have solved this problem.