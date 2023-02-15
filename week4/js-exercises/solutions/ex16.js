// write your solution here
function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}

function buildTriangle(numb) {
  var triangle = '';
  for(var x =1; x <= numb; x++){
      triangle += makeLine(x);
      
  }
  return triangle;
  
}
console.log(buildTriangle(10));
