// class User {
//     email: string;
//     name: string;
//     readonly city: string = "Seoul";

//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

// class User {
//     constructor(
//         public email: string,
//         private name: string,
//         protected city: string
//     ){}
// }

// const user: User = new User("test@com", "TestUser", "Istanbul");

// console.log(user);

// new User("test@com", "TestUser");
// // user.city = "Istanbul"
// console.log(user.city);
// console.log(user.name);
// console.log(user.email);