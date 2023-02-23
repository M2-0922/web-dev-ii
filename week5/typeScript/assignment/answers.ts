//1
let myString: string = "Hello, TypeScript!";
console.log(myString);

//2
function multiplyNumbers(num1: number, num2: number): number {
    return num1 * num2;
  }

//3
const myArray: number[] = [1, 2, 3];

//4
function reverseString(str: string): string {
  return str.split('').reverse().join('');
}

//5
let myObject: { name: string, age: string, email: string } = {
  name: "John",
  age: "30",
  email: "john@example.com"
};

console.log(myObject); 

//6
function isEven(num: number): boolean {
  return num % 2 === 0;
}

//7
function removeDuplicates(numero: number[]): number[] {
  const uniqueNumbers = {};

  const result = [];

  for (let i = 0; i < numero.length; i++) {
    const number = numero[i];

    if (!uniqueNumbers[number]) {
      uniqueNumbers[number] = true;

      result.push(number);
    }
  }
  return result;
}

//8
let myBoolean: boolean = 5 > 2;

//9
function capitalizeString(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}




  