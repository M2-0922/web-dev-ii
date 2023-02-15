// write your solution here

const ageCalculator = function (name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  console.log(`${name} is ${age} years old.`);
};
ageCalculator("John", 1983, 2015);
