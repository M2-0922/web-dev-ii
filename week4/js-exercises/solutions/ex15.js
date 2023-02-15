// write your solution here
function ageCalculator(name, yearOfBirth, currentYear){
	let getAge = currentYear - yearOfBirth;
	return name + " is " + getAge + " years old";
}

console.log(ageCalculator("John", 1983, 2015));