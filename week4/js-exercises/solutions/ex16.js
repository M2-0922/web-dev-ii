// write your solution here
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* ";
  }
  return line + "\n";
}

function buildTriangle(width) {
  let triangles = "";

  for (let i = 1; i <= width; i++) {
    triangles += makeLine(i);
  }

  return triangles;
}

console.log(buildTriangle(10));
