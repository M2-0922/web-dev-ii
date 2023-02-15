// write your solution here

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* "
    }
    return line + "\n";
}

function buildTriangle(width) {
    let result = "";
    for (let i = 0; i < width; i++) {
        result += makeLine(i);
    }
    result = result.substring(0, result.length - 1);
    return result;
}

console.log(buildTriangle(10));