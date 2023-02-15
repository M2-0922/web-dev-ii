// write your solution here
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

const buildTriangle = (num) => {
  let triangle = "";
  for (let i = 1; i <= num; i++) {
    triangle += makeLine(i);
  }

  return triangle;
};

console.log(buildTriangle(10));
