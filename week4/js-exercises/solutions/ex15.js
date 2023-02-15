// write your solution here
let ageCalculator = (name, yearOfBirth, currentYear) => {
    let age = currentYear - yearOfBirth;
    return (`${name} is ${age} years old`)
};
  
console.log(ageCalculator("John", 1983, 2015));