// write your solution here

const laugh = function (num) {
  return "ha".repeat(num) + "!";
};

function emotions(str, fn) {
  console.log("I am " + str + ", " + fn(2));
}

emotions("happy", function (num) {
  return "ha".repeat(num) + "!";
});
