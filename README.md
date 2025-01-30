# BHE Software Engineer Coding Exercise

## Nth prime number project

This project main goal is to implements an efficient algorithm to find the Nth prime number using a Segmented Sieve of Eratosthenes. Initially, I explored different methods, such as simple trial division and the classic Sieve of Eratosthenes, before arriving at the Segmented Sieve approach for better memory efficiency when dealing with large numbers.

## How the Code Works

The program starts by estimating an upper limit for the Nth prime.

It then applies a Segmented Sieve of Eratosthenes, dividing the range into smaller segments to efficiently mark non-prime numbers.

A smaller prime list is generated using the Sieve of Eratosthenes to assist in marking multiples in each segment.

The algorithm collects prime numbers until it reaches the Nth prime and returns it.

I used AI to help me understand the underlying principles of the algorithm, but I optimized the implementation to improve clarity and efficiency.

## Instalation and usage

- Clone the respository:
  git clone https://github.com/Lucasparra1213/bhe-code-exercise

- Navigate repository:
  cd bhe-code-exercise/javascript/Sieve

- Install dependencies
  npm install

- Run the project
  node sieve.js

- Run tests
  npm test
  


