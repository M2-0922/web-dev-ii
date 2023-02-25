// function detectType(value: string | number | number[] | string[]) {
//     // value.toLowerCase();
//     if(typeof value === "string") {
//         return value.toLowerCase();
//     }else if (typeof value === 'object'){
//         value.map((item) => {
//             return item + 2;
//         })
//     }
// }

function provideId(id: string | null) {
    if(!id){
        console.error("No id provided");
        return
    }
    id.toLowerCase();
}

provideId("");

interface User {
    id: number,
    name: string
}

interface Admin {
    id: number,
    username: string,
    role: "admin" | "mod"
}

function printUser(person: User | Admin){
    if("role" in person) { // pretty sure this is admin
        return `${person.username} (${person.role})`
    }
    return `${person.name} ("user")`
}

// instanceof and Type predicates

function logDate(date: Date | string): string {
    if(date instanceof Date){ // pretty sure its Date
        return date.toUTCString();
    }
    return date.toLowerCase();
}

type Fish = { swim: () => void };
type Bird = { fly: () => void };

function isFish(animal: Fish | Bird){
    return (animal as Fish).swim !== undefined
}

// function move(animal: Fish | Bird) {
//     // if(isFish(animal)){
//     //     // isFish(animal) returns boolean, 
//     //     return animal.swim()
//     // }
// }

// Discriminated Unions and Exhaustiveness Checking

interface Square {
    kind: "square",
    size: number;
}

interface Rectangle {
    kind: "rectangle",
    width: number,
    height: number
}

interface Circle {
    kind: "circle",
    radius: number
}

type Shape = Square | Rectangle | Circle;

function area(arg: Shape){
    switch(arg.kind){
        case "square": return arg.size * arg.size;
        case "rectangle": return arg.height * arg.width;
        case "circle": return Math.PI * arg.radius ** 2;
        default: return assertNever(arg)
        // default: 
        //     const _exhaustiveCheck: never = arg;
        //     return _exhaustiveCheck
    }
}

function assertNever(arg: never): never{
    throw new Error("Unexpected kind: " + arg)
}

// typescript docs https://www.typescriptlang.org/docs/handbook

