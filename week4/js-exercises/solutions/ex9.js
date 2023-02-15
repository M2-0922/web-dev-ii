// write your solution here
let loop = 60;

while (loop > 0 ) {
  if (loop === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (loop === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (loop === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (loop === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (loop === 6) {
    console.log("Main engine start");
  } else {
    console.log(`T-${loop} seconds`);
  }
  loop--;
}
console.log("Solid rocket booster ignition and liftoff!")