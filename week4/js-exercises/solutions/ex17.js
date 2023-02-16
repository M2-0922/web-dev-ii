// write your solution here
function laugh(num) {
    let lang = ""
    for (let i = 0; i < num; i++) {
        lang += "ha";
    }
    return lang + "!";
}

console.log(laugh(3));