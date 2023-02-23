// let score: number | string = 33;
// score = "Hello";
// score = 5;
// score = true;

type User = {
    name: string,
    password: string
}

type Admin = {
    username: string,
    password: string
}

let user: User | Admin = {username: "", password: ""}

function getValue(val: number | string){
    if(typeof val === "string"){
        return val.toLowerCase();
    }
    return val + 2;
}

// array

let arr: string[] = ["1", "2", "3", "4"];
let arr2: number[] = [1, 2, 3, 4, 5];

let arr3: string[] | number[] = [1, 2, 3];
let arrMix: (string | number)[] = [1, 2, "3"];

// let pi:3.14 = 3.14;

let role: "user" | "admin" | "superuser" | "mod"
role = "mod"
console.log(role);
