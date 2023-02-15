// 1
let numbers = [1, 2, 3, 4, 5, 6];
let maxNumber = numbers.reduce(function(acc, curr) {
  return Math.max(acc, curr);
});
console.log(maxNumber); // 6


// 2
let people = [{ name: "Alice", age: 30, city: "New York" }, { name: "Bob", age: 40, city: "Los Angeles" }, { name: "Charlie", age: 25, city: "New York" }];
let groupedPeople = people.reduce(function(acc, curr) {
  if(acc[curr.city]) {
    acc[curr.city].push(curr);
  } else {
    acc[curr.city] = [curr];
  }
  return acc;
}, {});
console.log(groupedPeople);
/*
Output:
{
  "New York": [
    { name: "Alice", age: 30, city: "New York" },
    { name: "Charlie", age: 25, city: "New York" }
  ],
  "Los Angeles": [
    { name: "Bob", age: 40, city: "Los Angeles" }
  ]
}
*/


// 3

let nestedArrays = [[1, 2], [3, 4], [5, 6]];
let flattenArray = nestedArrays.reduce(function(accumulator, currentValue) {
  return accumulator.concat(currentValue);
}, []);
console.log(flattenArray); // [1, 2, 3, 4, 5, 6]

let flattenArrayArrow = nestedArrays.reduce((acc, curr) => [...acc, ...curr], []);
