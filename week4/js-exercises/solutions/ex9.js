// write your solution here
let i = 60;
while (i > 0){
	console.log("T-" + i + " seconds");
  i--;
  if(i == 50){
  	console.log("Orbiter transfers from ground to internal power");
    i--;
  } else if(i == 31){
  	console.log("Ground launch sequencer is go for auto sequence start");
    i--;
  } else if(i == 16){
  	console.log("Activate launch pad sound suppression system"); 
    i--;
  } else if(i == 10){
  	console.log("Activate main engine hydrogen burnoff system");
    i--;
  } else if(i == 6){
  	console.log("Main engine start");
    i--;
	} else if(i == 0){
  	console.log("Solid rocket booster ignition and liftoff!");
  } 
}