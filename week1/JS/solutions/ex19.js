// write your solution here
function emotions(mood, expression) {
    console.log("I am " + mood + ", " + expression(2));
  }
  
  emotions("happy", function(num) {
    var laughter = "";
    for (var i = 0; i < num; i++) {
      laughter += "ha";
    }
    return laughter + "!";
  });
  