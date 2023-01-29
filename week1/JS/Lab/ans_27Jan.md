// - Use the `find` function to locate the first element in an array that satisfies a certain condition.
// let numberArr = [11, 52, 23, 4, 25];
const found = numberArr.find(function(number){
  return number > 50;
});
console.log(found);

// - Use the `some` function to determine if any elements in an array satisfy a certain condition.
// let numberArr = [11, 52, 23, 4, 25];
const hasEven = numberArr.some(function(number){
  return number % 2 === 0;
});
console.log(hasEven);

// - Use the `every` function to check if all elements in an array satisfy a certain condition.
// let numberArr = [11, 52, 23, 4, 25];
const allPositive = numberArr.every(function(number){
  return number > 0;
});
console.log(allPositive);

//- Use the `find` function to locate the first object in an array that has a specific property value.
// let objectArr = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Jack", age: 35 },
//   { name: "Jill", age: 40 },
//   { name: "Joe", age: 45 }
// ];
const firstPersonOver30 = objectArr.find(function(person){
  return person.age > 30;
});
console.log(firstPersonOver30);

// - Use the `some` function to check if any objects in an array have a specific property value.
// let stringArr = ["hello", "world", "this", "is", "a", "string"];
const validWords = ['hello'];
const anyValidWords = stringArr.some(function(word) {
  return validWords.includes(word);
});
console.log(anyValidWords);

// - Use the `every` function to check if all objects in an array have a specific property value.
// let stringArr = ["hello", "world", "this", "is", "a", "string"];
const allStrings = stringArr.every(function(element){
  return typeof element === 'string';
});
console.log(allStrings);

// - Use the `find` function to locate the first element in an array that is greater than a certain value.
// let numberArr = [11, 52, 23, 4, 25];
const firstGreaterThan50 = numberArr.find(function(element){
  return element > 50;
});
console.log(firstGreaterThan50);

// - Use the `some` function to check if any elements in an array are even numbers.
// let numberArr = [11, 52, 23, 4, 25];
const Even = numberArr.some(function(number){
  return number % 2 === 0;
});
console.log(Even);
