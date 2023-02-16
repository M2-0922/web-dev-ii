// write your solution here
const laugh = function(num){
    let lang = "";
    for (let i = 0; i < num; i++){
        lang += "ha"
    }
    return lang += "!";
};

const emotions = (req, res) => {
    return `I am ${req}, ${res}`;
};

console.log(emotions("happy", laugh(2)));