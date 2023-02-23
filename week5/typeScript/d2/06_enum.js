"use strict";
exports.__esModule = true;

var Role;
(function (Role) {
    Role["admin"] = "ADMIN";
    Role["user"] = "USER";
    Role["chef"] = "CHEF";
})(Role || (Role = {}));
;
// console.log(Role.admin);
// console.log(Role.chef);
// console.log("CHEF");

var seatChoise;

(function (seatChoise) {
    seatChoise["AISLE"] = "AISLE";
    seatChoise[seatChoise["MIDDLE"] = 3] = "MIDDLE";
    seatChoise["WINDOW"] = "WINDOW";
    seatChoise["SOMETHING"] = "SOMETHING";
    seatChoise["VIP"] = "VIP";
})(seatChoise || (seatChoise = {}));

var joeSeat = seatChoise.AISLE;
console.log(joeSeat);
