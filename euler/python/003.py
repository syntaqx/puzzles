#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Problem 3 - Largest prime factor
# https://projecteuler.net/problem=3
#
# The prime factors of 13195 are 5, 7, 13 and 29.
#
# What is the largest prime factor of the number 600851475143 ?

num = 600851475143
i   = 2

while i * i < num:
    while num % i == 0:
        num = num / i

    i = i + 1

print num

# Congratulations, the answer you gave to problem 3 is correct.
# You are the 248249th person to have solved this problem.

# You have earned 1 new award:
# * __Baby Steps:__ Solve three problems