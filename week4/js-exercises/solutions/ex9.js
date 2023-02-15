// write your solution here

let i = 60;

while (i >= 0) {
  console.log(`T-${i} seconds`);

  if (i === 50) {
    console.log("Orbiter transfers from ground to internal power");
  }

  if (i === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  }

  if (i === 16) {
    console.log("Activate launch pad sound suppression system");
  }

  if (i === 10) {
    console.log("Activate main engine hydrogen burnoff system ");
  }

  if (i === 6) {
    console.log("Main engine start");
  }

  if (i === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  }

  i--;
}
