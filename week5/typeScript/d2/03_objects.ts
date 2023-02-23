// let obj = {
//     name: "joel",
//     lastName: "doe"
// }
// console.log(obj.name);
// console.log(obj.lastName);

let User = {
    name:"",
    email:"",
    password:""
}

// let newUser: User;
// newUser = {name: "", email:"", password: ""};

// function createUser({name: string, isPaid: boolean}){
// }

// let newUser = {name: "joe", isPaid: true};
// createUser(newUser);

function createCourse(): {name: string, price: number} {
    return {name: "TypeScript", price: 0}
}

type User = {
    readonly _id: number,
    name: string,
    email: string,
    password: string,
    role: number,
    isActive: boolean
}

function createUser(user: User){
    // logic
}

let newUser: User = {_id: 231, name: "string", email: "string", password: "string", role: 0, isActive: false};

newUser.name = "asdsada";
newUser.email = "askdsakdaksdakd";
// newUser._id = 500; readonly cannot changable
createUser(newUser)

type cardNumber = {
    creditCardNumber: number,
};

type cardName = {
    creditCardName: string
};

type cardCvv = {
    cvv: number
}

type carDetails = cardNumber & cardName & cardCvv;

let newCard: carDetails;

newCard = {creditCardNumber: 200, creditCardName: "", cvv: 400};

export {}