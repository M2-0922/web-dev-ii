// write your solution here
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

const buildTriangle = (num) => {
  for (let i = 1; i <= num; i++) {
    console.log(makeLine(i));
  }
};

console.log(buildTriangle(10));
