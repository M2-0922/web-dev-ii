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
let num = numberArr.find(n => n > 10 && n < 20 );	
let str = stringArr.find(word => word.length = 4);
let obj = objectArr.find(person => person.name.includes("Ji"));
let mix = mixedArr.find(mix => typeof mix == 'object');

// num = 11
// str = hello
// obj = { name: 'Jill', age: 40 }
// mix = { name: 'Adam', age: 21 }
```

- Use the `some` function to determine if any elements in an array satisfy a certain condition.

```js
let num = numberArr.some(n => n < 5);	
let str = stringArr.some(word => word.length > 10);
let obj = objectArr.some(person => person.name.includes("oe"));
let mix = mixedArr.some(mix => typeof mix == 'object');

// num = true
// str = false
// obj = true
// mix = true
```

- Use the `every` function to check if all elements in an array satisfy a certain condition.

```js
let num = numberArr.every(n => n < 5);
let str = stringArr.every(word => word.length > 60);
let obj = objectArr.every(person => person.name.includes("x"));
let mix = mixedArr.every(mix => typeof mix == 'number');

// num = false
// str = false
// obj = false
// mix = false
```

- Use the `reduce` function to sum all elements in an array.

```js
let num = numberArr.reduce((total, num) => total += String(num));
let str = stringArr.reduce((total, str) => total += str);
let obj = objectArr.reduce((previousValue, currentValue) => previousValue + currentValue.name + currentValue.age,"");
let mix = mixedArr.reduce((total, str) => total += typeof str === 'object' ? str.name + str.age : str );

// num = 115223425
// str = helloworldthisisastring
// obj = John25Jane30Jack35Jill40Joe45
// mix = 1hellofalseworld3thistrueisAdam21a6mixed7array
```

- Use the `find` function to locate the first object in an array that has a specific property value.

```js
let num = numberArr.find(n => n > 50 );	
let str = stringArr.find(word => word.includes("r"));
let obj = objectArr.find(person => person.name.includes("J") && person.age > 30);
let mix = mixedArr.find(mix => typeof mix == 'string');

//num = 52
//str = world
//obj = { name: 'Jack', age: 35 }
//mix = hello
```

- Use the `some` function to check if any objects in an array have a specific property value.

```js
let num = numberArr.some(n => n < 5);	
let str = stringArr.some(word => word === "a");
let obj = objectArr.some(person => person.name === "Joe");
let mix = mixedArr.some(mix => typeof mix == 'number' && mix > 5);

// num = true
// str = true
// obj = true
// mix = true
```

- Use the `every` function to check if all objects in an array have a specific property value.

```js
let num = numberArr.every(n => n < 10);
let str = stringArr.every(word => word.includes("s"));
let obj = objectArr.every(person => person.age >= 25);
let mix = mixedArr.every(mix => typeof mix == 'object');

// num = false
// str = false
// obj = true
// mix = false
```

- Use the `reduce` function to concatenate all elements in an array into a single string.

```js
let num = numberArr.reduce((total, num) => total += num);
let str = stringArr.reduce((total, str, count) => {
		  typeof total === 'string' && typeof str === 'string'? count += count : count += 0
		  return count + 1
		  });
let obj = objectArr.reduce((previousValue, currentValue) => previousValue + currentValue.age,0);
let mix = mixedArr.reduce((total, str) => total += typeof str === 'object' ? 1 : 1 );

// num = 115
// str = 6
// obj = 175
// mix = 14
```

- Use the `find` function to locate the first element in an array that is greater than a certain value.

```js
let num = numberArr.find(n => n > 50 );	
let str = stringArr.find(word => word.length > 5);
let obj = objectArr.find((person) => person.age > 40);
let mix = mixedArr.find(mix => typeof mix == 'number' && mix > 5);

// num = 52
// str = string
// obj = { name: 'Joe', age: 45 }
// mix = 6
```

- Use the `some` function to check if any elements in an array are even numbers.

```js
let num = numberArr.some(n => n % 2 == 0);	
let str = stringArr.some(word => typeof word === 'number' ? word % 2 == 0 : false);
let obj = objectArr.some(person => person.age % 2 == 0);
let mix = mixedArr.some(mix => typeof mix == 'number' ? mix % 2 == 0 : false);

// num = true
// str = false
// obj = true
// mix = true
```

- Use the `every` function to check if all elements in an array are unique.

```js
let num = numberArr.every((preNum, corNum) => preNum != corNum);
let str = stringArr.every((preWord, corWord) => preWord !== corWord);
let obj = objectArr.every((prePerson, corPerson) => prePerson.name !== corPerson.name && prePerson.age !== corPerson.age);
let mix = mixedArr.every((preMix, corMix) => preMix !== corMix);

// num = true
// str = true
// obj = true
// mix = true
```

- Use the `reduce` function to find the product of all elements in an array.

```js
let num = numberArr.reduce((total, num) => total *= num);
let str = stringArr.reduce((preWord, corWord) => preWord *= corWord);
let obj = objectArr.reduce((prePerson, corPerson) => prePerson *= corPerson.age, 1);
let mix = mixedArr.reduce((preMix, corMix) => typeof corMix == 'number' ? preMix *= corMix: preMix, 1);

// num = 1315600
// str = NaN
// obj = 47250000
// mix = 126
```

- Use the `find` function to locate the first object in an array that has a specific property set to true.

```js
let num = numberArr.find(num => num == true);	
let str = stringArr.find(word => word == true);
let obj = objectArr.find(person => person == true);
let mix = mixedArr.find(mix => mix == true);

// num = undefined
// str = undefined
// obj = undefined
// mix = 1
```

- Use the `some` function to check if any objects in an array have a property set to null.

```js
let num = numberArr.some(num => num === null);	
let str = stringArr.some(word => word === null);
let obj = objectArr.some(person => person === null);
let mix = mixedArr.some(mix => mix === null);

// num = false
// str = false
// obj = false
// mix = false
```

- Use the `every` function to check if all elements in an array are of the same type.

```js
let num = numberArr.every((num, index, arr) => typeof num === typeof arr[0]);	
let str = stringArr.every((word, index, arr) => typeof word === typeof arr[0]);
let obj = objectArr.every((person, index, arr) => typeof person === typeof arr[0]);
let mix = mixedArr.every((mix, index, arr) => typeof mix === typeof arr[0]);

// num = true
// str = true
// obj = true
// mix = false
```

- Use the `reduce` function to find the largest number in an array.

```js
let num = numberArr.reduce((preNum, corNum) => Math.max(preNum, corNum));
let str = stringArr.reduce((preWord, corWord) => typeof corWord == 'number' ? Math.max(preWord, corWord) : preWord, 0);
let obj = objectArr.reduce((prePerson, corPerson) => Math.max(prePerson, corPerson.age), 0);
let mix = mixedArr.reduce((preMix, corMix) => typeof corMix == 'number' ? Math.max(preMix, corMix) : preMix, 0);

// num = 52
// str = 0
// obj = 45
// mix = 7
```

- Use the `find` function to locate the first element in an array that is a string that includes a specific word.

```js
let num = numberArr.find(num => String(num).includes("1"));	
let str = stringArr.find(word => word.includes("s"));
let obj = objectArr.find(person => person.name.includes("ck"));
let mix = mixedArr.find(mix => typeof mix == 'string' ? mix.includes("ay") : false);

// num = 11
// str = this
// obj = { name: 'Jack', age: 35 }
// mix = array
```

- Use the `some` function to check if any elements in an array are objects.

```js
let num = numberArr.some(num => typeof num === 'object');	
let str = stringArr.some(word => typeof word === 'object');
let obj = objectArr.some(person => typeof person === 'object');
let mix = mixedArr.some(mix => typeof mix === 'object');

// num = false
// str = false
// obj = true
// mix = true
```

- Use the `every` function to check if all elements in an array are integers.

```js
let num = numberArr.every(num => Number.isInteger(num));	
let str = stringArr.every(word => Number.isInteger(word));
let obj = objectArr.every(person => Number.isInteger(person.name) && Number.isInteger(person.age));
let mix = mixedArr.every(mix => Number.isInteger(mix));

// num = true
// str = false
// obj = false
// mix = false
```

- Use the `reduce` function to count the total number of characters in all strings in an array.

```js
let num = numberArr.reduce((total, num) => typeof num === 'string' ? total += num.length : total, 0);
let str = stringArr.reduce((total, str) => typeof str === 'string' ? total += str.length : total, 0);
let obj = objectArr.reduce((total, curObj) => typeof curObj.name === 'string' ? total += curObj.name.length : total, 0);
let mix = mixedArr.reduce((total, str) => typeof str === 'string' ? total += str.length : total, 0);

// num = 0
// str = 23
// obj = 19
// mix = 27
```