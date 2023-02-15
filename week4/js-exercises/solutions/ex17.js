// write your solution here
let laugh = function(num) {
    let word ="";
    for(let i = 1; i <= num; i++) {
      word += "ha";
    }
    return (`${word}!`);
}

console.log(laugh(3));