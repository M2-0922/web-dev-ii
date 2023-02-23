"use strict";
// function sum(a, b){
//     return a + b;
// }
// sum(true, 5)
exports.__esModule = true;
function sum(a, b) {
    return a + b;
}
sum(20, 5);
function sumPlusTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
console.log(getUpper("kubilay"));
console.log(getUpper("hello"));
function signUpUser(name, email, password, isSubscribed) {
    // logic part..
}
signUpUser("kubilay", "kubilay@gmail.com", "123456", false);
// 0 is user for role
// 1 is admin for role
function loginUser(email, password, role) {
    if (role === void 0) { role = 0; }
    // logic
}
loginUser("test@com", "12345", 2);
// const cars = ["ford", "bmw", "mercedes", "toyota"];
var cars = [1, 2, 3, 4, 5, 6, "2", true];
cars.map(function (car) {
    // console.log(car);
    return "car is ".concat(car);
});
function sayMyName(name) {
    console.log(name);
    // return name;
}
function handleError(errMessage) {
    throw new Error(errMessage);
    // return errMessage;
}
// arrow function syntax of typescript
var getAge = function (age) {
    return age;
};
function setUserInformation(data) {
    console.log(data.email);
    console.log(data["name"]);
}
setUserInformation({ name: "joel", age: 20, email: "test@test.com" });
