```js
let numberArr = [11, 52, 23, 4, 25];
let stringArr = ["hello", "world", "this", "is", "a", "string"];
let objectArr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jack", age: 35 },
  { name: "Jill", age: 40 },
  { name: "Joe", age: 45 }
];
let mixedArr = [1, "hello", false, "world", 3, "this", true, "is", { name: "Adam", age: 21 }, "a", 6, "mixed", 7, "array"];

```

- Use the `find` function to locate the first element in an array that satisfies a certain condition.
```js
let find1_num = numberArr.find(num => num > 10 && num < 20); //11
let find1_str = stringArr.find(str => (/^w/).test(str)); //world
let find1_obj = objectArr.find(obj => (/a/).test(obj.name)); // { name: "Jane", age: 30 }
let find1_mxd = mixedArr.find(mxd => typeof mxd == 'string'); //hello
```
- Use the `some` function to determine if any elements in an array satisfy a certain condition.
```js
let some1_num = numberArr.some(num => num > 50); //true
let some1_str = stringArr.some(str => str.length > 5); //true
let some1_obj = objectArr.some(obj => obj.age >= 30); //true
let some1_mxd = mixedArr.some(mxd => typeof mxd == 'number'); //true
```
- Use the `every` function to check if all elements in an array satisfy a certain condition.
```js
let every1_num = numberArr.every(num => num > 0); //true
let every1_str = stringArr.every(str => typeof str == 'string'); //true
let every1_obj = objectArr.every(obj => (/^\w{1,5}$/).test(obj.name)); //true
let every1_mxd = mixedArr.every(mxd => mxd != null); //true
```
- Use the `reduce` function to sum all elements in an array.
```js
let reduce1_num = numberArr.reduce((total, num) => total += num); //115
let reduce1_str = stringArr.reduce((total, str) => total += str); //helloworldthisisastring
let reduce1_obj = objectArr.reduce((total, obj) => total += obj.age, 0); // 175
let reduce1_mxd = mixedArr.reduce((total, mxd) => typeof mxd == 'number' ? total += mxd : total, 0); //17
```
- Use the `find` function to locate the first object in an array that has a specific property value.
```js
let find2_num = numberArr.find(num => num == 23); //23
let find2_str = stringArr.find(str => str == 'a'); //a
let find2_obj = objectArr.find(obj => obj.name == 'Jack'); //{ name: "Jack", age: 35 }
let find2_mxd = mixedArr.find(mxd => mxd === true); //true
```
- Use the `some` function to check if any objects in an array have a specific property value.
```js
let some2_num = numberArr.some(num => num == 5); //false
let some2_str = stringArr.some(str => str == 'abc'); //false
let some2_obj = objectArr.some(obj => obj.age == 28); //false
let some2_mxd = mixedArr.some(mxd => mxd == 8); //false
```
- Use the `every` function to check if all objects in an array have a specific property value.
```js
let every2_num = numberArr.every(num => num == 10); //false
let every2_str = stringArr.every(str => str == 'this'); //false
let every2_obj = objectArr.every(obj => obj.name == 'John'); //false
let every2_mxd = mixedArr.every(mxd => typeof mxd == 'object'); //false
```
- Use the `reduce` function to concatenate all elements in an array into a single string.
```js
let reduce2_num = numberArr.reduce((totalString, num) => totalString += num.toString()); //115223425
let reduce2_str = stringArr.reduce((totalString, str) => totalString += str); //helloworldthisisastring
let reduce2_obj = objectArr.reduce((totalString, obj) => totalString += obj.name + " " + obj.age + ", ", "");
let reduce2_mxd = mixedArr.reduce((totalString, mxd) => typeof mxd == 'string' ? totalString += mxd : totalString += JSON.stringify(mxd));
```
- Use the `find` function to locate the first element in an array that is greater than a certain value.
```js
let find3_num = numberArr.find(num => num > 20); //23
let find3_str = stringArr.find(str => str.length > 2); //hello
let find3_obj = objectArr.find(obj => obj.age > 40); //{ name: "Joe", age: 45 }
let find3_mxd = mixedArr.find(mxd => mxd > 5); //6
```
- Use the `some` function to check if any elements in an array are even numbers.
```js
let some3_num = numberArr.some(num => num % 2 == 0); //true
let some3_str = stringArr.some(str => typeof str == 'number' ? str % 2 == 0 : false); //false
let some3_obj = objectArr.some(obj => obj.age % 2 == 0); //true
let some3_mxd = mixedArr.some(mxd => typeof mxd == 'number' ? mxd % 2 == 0 : false); //true
```
- Use the `every` function to check if all elements in an array are unique.
```js
let every3_num = numberArr.every((num, index, array) => index == array.indexOf(num) && index == array.lastIndexOf(num)); //true
let every3_str = stringArr.every((str, index, array) => index == array.indexOf(str) && index == array.lastIndexOf(str)); //true
let every3_obj = objectArr.every((obj, index, array) => index == array.indexOf(obj) && index == array.lastIndexOf(obj)); //true
let every3_mxd = mixedArr.every((mxd, index, array) => index == array.indexOf(mxd) && index == array.lastIndexOf(mxd)); //true
```
- Use the `reduce` function to find the product of all elements in an array.
```js
let reduce3_num = numberArr.reduce((total, num) => total *= num, 1); //1315600
let reduce3_str = stringArr.reduce((total, str) => typeof str == 'number' ? total *= str : total, 1); //undefined
let reduce3_obj = objectArr.reduce((total, obj) => total *= obj.age, 1); //47250000
let reduce3_mxd = mixedArr.reduce((total, mxd) => typeof mxd == 'number' ? total *= mxd : total, 1); //126
```
- Use the `find` function to locate the first object in an array that has a specific property set to true.
```js
let find4_num = numberArr.find(num => num == true); //undefined
let find4_str = stringArr.find(str => str == true); //undefined
let find4_obj = objectArr.find(obj => obj == true); //undefined
let find4_mxd = mixedArr.find(mxd => mxd === true); //true
```
- Use the `some` function to check if any objects in an array have a property set to null.
```js
let some4_num = numberArr.some(num => num === null); //false
let some4_str = stringArr.some(str => str === null); //false
let some4_obj = objectArr.some(obj => obj === null); //false
let some4_mxd = mixedArr.some(mxd => mxd === null); //false
```
- Use the `every` function to check if all elements in an array are of the same type.
```js
let every4_num = numberArr.every((num, index, array) => typeof num == typeof array[0]); //true
let every4_str = stringArr.every((str, index, array) => typeof str == typeof array[0]); //true
let every4_obj = objectArr.every((obj, index, array) => typeof obj == typeof array[0]); //true
let every4_mxd = mixedArr.every((mxd, index, array) => typeof mxd == typeof array[0]); //false
```
- Use the `reduce` function to find the largest number in an array.
```js
let reduce4_num = numberArr.reduce((largest, num) => Math.max(largest, num)); //52
let reduce4_str = stringArr.reduce((largest, str) => typeof str == 'number' ? Math.max(largest, str) : largest, 0); //0
let reduce4_obj = objectArr.reduce((largest, obj) => Math.max(largest, obj.age), 0); //45
let reduce4_mxd = mixedArr.reduce((largest, mxd) => typeof mxd == 'number' ? Math.max(largest, mxd) : largest, 0); //7
```
- Use the `find` function to locate the first element in an array that is a string that includes a specific word.
```js
let find5_num = numberArr.find(num => (/a/).test(num)); //undefined
let find5_str = stringArr.find(str => (/a/).test(str)); //a
let find5_obj = objectArr.find(obj => (/^J\w{2}$/).test(obj.name)); //{ name: "Joe", age: 45 }
let find5_mxd = mixedArr.find(mxd => typeof mxd == 'string' ? (/mixed/).test(mxd) : false); //mixed
```
- Use the `some` function to check if any elements in an array are objects.
```js
let some5_num = numberArr.some(num => typeof num == 'object'); //false
let some5_str = stringArr.some(str => typeof str == 'object'); //false
let some5_obj = objectArr.some(obj => typeof obj == 'object'); //true
let some5_mxd = mixedArr.some(mxd => typeof mxd == 'object'); //true
```
- Use the `every` function to check if all elements in an array are integers.
```js
let every5_num = numberArr.every(num => Number.isInteger(num)); //true
let every5_str = stringArr.every(str => Number.isInteger(str)); //false
let every5_obj = objectArr.every(obj => Number.isInteger(obj.name) && Number.isInteger(obj.age)); //false
let every5_mxd = mixedArr.every(mxd => Number.isInteger(mxd)); //false
```
- Use the `reduce` function to count the total number of characters in all strings in an array.
```js
let reduce5_num = numberArr.reduce((total, num) => typeof num == 'string' ? total += num.length : total, 0); //0
let reduce5_str = stringArr.reduce((total, str) => typeof str == 'string' ? total += str.length : total, 0); //23
let reduce5_obj = objectArr.reduce((total, obj) => typeof obj == 'string' ? total += obj.name.length : total, 0); //19
let reduce5_mxd = mixedArr.reduce((total, mxd) => typeof mxd == 'string' ? total += mxd.length : total, 0); 27
```