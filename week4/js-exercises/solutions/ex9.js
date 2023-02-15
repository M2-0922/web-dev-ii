// write your solution here
let timer = 60;
while (timer > -1) {
  if (timer === 50) {
    console.log("Orbiter transfers from ground to internal power");
  } else if (timer === 31) {
    console.log("Ground launch sequencer is go for auto sequence start");
  } else if (timer === 16) {
    console.log("Activate launch pad sound suppression system");
  } else if (timer === 10) {
    console.log("Activate main engine hydrogen burnoff system");
  } else if (timer === 6) {
    console.log("Main engine start");
  } else if (timer === 0) {
    console.log("Solid rocket booster ignition and liftoff!");
  } else console.log(`T-${timer} seconds`);
  timer -= 1;
}
/*
Orbiter transfers from ground to internal power (T-50 seconds)
Ground launch sequencer is go for auto sequence start (T-31 seconds)
Activate launch pad sound suppression system (T-16 seconds)
Activate main engine hydrogen burnoff system (T-10 seconds)
Main engine start (T-6 seconds)
Solid rocket booster ignition and liftoff! (T-0 seconds)
NOTE: "T-50 seconds" read as "T-minus 50 seconds".
*/
