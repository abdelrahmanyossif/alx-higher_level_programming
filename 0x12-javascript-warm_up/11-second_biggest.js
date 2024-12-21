#!/usr/bin/node

const args = process.argv.slice(2);

const numbers = args.map(Number);

if (numbers.length <= 1) {
  console.log(0);
} else {
  const uniqueNumbers = [...new Set(numbers)];
  uniqueNumbers.sort((a, b) => b - a);
  console.log(uniqueNumbers[1]);
}
