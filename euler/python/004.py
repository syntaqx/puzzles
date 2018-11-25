#!/usr/bin/env python
# -*- coding: utf-8 -*-

# Problem 4 - Largest palindrome product
# https://projecteuler.net/problem=4
#
# A palindromic number reads the same both ways. The largest palindrome made
# from the product of two 2-digit numbers is 9009 = 91 × 99.
#
# Find the largest palindrome made from the product of two 3-digit numbers.

largest = 0

for num1 in range(999, 100, -1):
    for num2 in range(num1, 100, -1):
        product = num1 * num2

        if product > largest:
            semordnilap = str(product)

            if (semordnilap == semordnilap[::-1]):
                largest = product

print largest

# Congratulations, the answer you gave to problem 4 is correct.
# You are the 225284th person to have solved this problem.