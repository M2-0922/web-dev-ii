// write your solution here
function ageCalculator(name, yearOfBirth, currentYear) {
    const age = currentYear - yearOfBirth;
    return name + " is " + age + " years old.";
  }

  console.log(ageCalculator("John", 1983, 2015));