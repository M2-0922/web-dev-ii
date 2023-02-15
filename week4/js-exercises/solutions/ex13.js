// write your solution here

function numFactorial(num) {
  if (num === 0) {
    return 1;
  }
  return num * numFactorial(num - 1);
}
console.log(numFactorial(4));
