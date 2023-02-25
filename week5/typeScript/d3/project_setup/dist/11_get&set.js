"use strict";
class User {
    constructor(email, name) {
        this._courseCount = 1;
        this.city = "Seoul";
        this.email = email;
        this.name = name;
    }
    get getCity() {
        return this.city;
    }
    get appleEmail() {
        return `apple.${this.email}`;
    }
    get getCountCourse() {
        return this._courseCount;
    }
    set setCourseCount(val) {
        if (val < 1) {
            throw new Error("Course count cannot be less than 1");
            // console.log("Course count cannot be less than 1");
            // console.error("Course count cannot be less than 1")
            // console.warn("Course count cannot be less than 1")
        }
        this._courseCount = val;
    }
}
class Student extends User {
}
const person = new User("test@test.com", "jane");
// person._courseCount
person.getCountCourse;
person.getCity; // Seoul
person.setCourseCount = 1;
