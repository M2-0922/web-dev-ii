// function sum(a, b){
//     return a + b;
// }
// sum(true, 5)

function sum(a: number, b: number){
    return a + b;
}

sum(20, 5);

function sumPlusTwo(num: number): number{
    return num + 2;
}

function getUpper(val: string): string{
    return val.toUpperCase();
}

console.log(getUpper("kubilay"));
console.log(getUpper("hello"));

function signUpUser(name: string, email: string, password: string, isSubscribed: boolean): any{
    // logic part..
}

signUpUser("kubilay", "kubilay@gmail.com", "123456", false);

// 0 is user for role
// 1 is admin for role
function loginUser(email: string, password: string, role: number = 0){
    // logic
}
loginUser("test@com", "12345", 2)

// const cars = ["ford", "bmw", "mercedes", "toyota"];
const cars = [1,2,3,4,5,6, "2", true];

cars.map((car): string => {
    // console.log(car);
    return `car is ${car}`;
})

function sayMyName(name: string): void{
    console.log(name);
    // return name;
}

function handleError(errMessage: string): never{
    throw new Error(errMessage);
    // return errMessage;
}

// arrow function syntax of typescript
const getAge = (age: number): number => {
    return age;
}

function setUserInformation(data: {name: string, age: number, email: string}){
    console.log(data.email);
    console.log(data["name"]);
}

setUserInformation({ name: "joel", age: 20, email: "test@test.com" })

export {}