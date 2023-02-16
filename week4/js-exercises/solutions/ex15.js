// write your solution here
function ageCalculator(name, yearOfBirth, currentYear) {
    let age = currentYear - yearOfBirth;
    if(age <= 0){
        console.log("This person have not born yet");
    }else{
    return name + " is " + age + " years old.";
    }
  }

  console.log(ageCalculator("Maria", 2000, 2022)); 
