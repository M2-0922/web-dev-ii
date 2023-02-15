// write your solution here

function ageCalculator (name, yearOfBirth, currentYear) {
    let age = currentYear - yearOfBirth;
    return `${name} is/is soon to be ${age} years old.`;
}

console.log(ageCalculator("Mari", 1998, 2023));