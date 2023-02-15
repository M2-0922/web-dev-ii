// write your solution here
function buildTriangle (width) {
    for (let i = 1; i <= width; i++) {
        console.log(makeLine(i));
    }
}

function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
}

buildTriangle(10);