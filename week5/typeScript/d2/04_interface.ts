interface User {
    readonly dbId: number,
    email: string,
    password: string,
    googleId?: number,
    subscribe(): string,
    getCoupon(couponName: string, value: number): number
}

interface User {
    githubId?: string
}

interface Admin extends User {
    role: "admin" | "superuser" | "mod",
}

let user: Admin = 
    { 
        role: "admin", 
        dbId: 5, 
        email: "test.com", 
        password: "12345", 
        // googleId: 123, 
        subscribe: () => {return "User subscribed!"}, 
        getCoupon: (couponName: "10PERCENT", value: 10) => { return value; }
    };

// console.log(user.getCoupon("Hello", 20));

export {}