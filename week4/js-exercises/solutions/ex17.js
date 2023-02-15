// write your solution here
const laugh = function(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "ha"
    }
    result += "!";
    return result;
}

console.log(laugh(3));