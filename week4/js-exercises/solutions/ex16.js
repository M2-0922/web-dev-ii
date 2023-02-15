// write your solution here
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
      line += "* "
    }
    return line + "\n";
  }
  
  function buildTriangle(num) {
    for (let i = 0; i <= num; i++) {
      console.log(makeLine(i));
    }
  }
  
  buildTriangle(10);