// write your solution here
function ageCalculator(name, yearOfBirth, currentYear) {
    let old = currentYear - yearOfBirth;
    console.log(`${name} is ${old} years old.`);
}

ageCalculator("John", 1983, 2015);