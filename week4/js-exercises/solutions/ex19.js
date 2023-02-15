// write your solution here
let laugh = function(num) {
    let word ="";
    for(let i = 1; i <= num; i++) {
      word += "ha";
    }
    return (`${word}!`);
  }
  
  function emotions(word, laughFunction) {
    console.log(`I am ${word}, ${laughFunction}`);
  }
  
  emotions("happy", laugh(2));