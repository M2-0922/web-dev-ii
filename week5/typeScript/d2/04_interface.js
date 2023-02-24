var user = {
    role: "admin",
    dbId: 5,
    email: "test.com",
    password: "12345",
    // googleId: 123, 
    subscribe: function () { return "User subscribed!"; },
    getCoupon: function (couponName, value) { return value; }
};
// console.log(user.getCoupon("Hello", 20));
