// write your solution here
function ageCalculator(name, yearOfBirth, currentYear) {
  const CurrentAge = currentYear - yearOfBirth;
  const Explanaiton = `${name} is ${CurrentAge} years old.`;

  return Explanaiton;
}

console.log(ageCalculator("John", 1983, 2015));
