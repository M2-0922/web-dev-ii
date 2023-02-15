// write your solution here
const laugh = function(num) {
    let result = "";
    for (let i = 0; i < num; i++) {
        result += "ha"
    }
    result += "!";
    return result;
}

const emotions = (emotion, callback) => {
    return `I am ${emotion}, ${callback}`;
}

console.log(emotions("happy", laugh(2)));