// write your solution here

function printFactorial(num) {
    let result = num;
    for (let x = num - 1; x > 0; x--) {
        result *= x;
    }
    return result;
}
console.log(printFactorial(12));