#!/usr/bin/node

const factorial = (n) => {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
};

const arg = process.argv[2];

const number = parseInt(arg);

const result = isNaN(number) ? 1 : factorial(number);

console.log(result);
