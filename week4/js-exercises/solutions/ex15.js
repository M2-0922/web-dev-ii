// write your solution here
function ageCalculator(name, yearOfBirth, currentYear) {
	let age = currentYear - yearOfBirth;
	return name + " is " + age + " years old.";
}

ageCalculator("yuya", 1996, 2023);
