#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Problem 48 - Self powers
# https://projecteuler.net/problem=48
#
# The series, 1^1 + 2^2 + 3^3 + ... + 10^10 = 10405071317.
#
# Find the last ten digits of the series, 1^1 + 2^2 + 3^3 + ... + 1000^1000.

import sys

if sys.version > '3':
    long = int

total = long(0)

for x in range(long(1), long(1000)):
    total += x ** x

print str(total)[-10:]

# Congratulations, the answer you gave to problem 48 is correct.
# You are the 66457th person to have solved this problem.