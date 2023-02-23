enum Role{
    admin = "ADMIN",
    user = "USER",
    chef = "CHEF"
};

// console.log(Role.admin);
// console.log(Role.chef);
// console.log("CHEF");

enum seatChoise {
    AISLE = "AISLE",
    MIDDLE = 3,
    WINDOW = "WINDOW",
    SOMETHING = "SOMETHING",
    VIP = "VIP"
}

const joeSeat = seatChoise.MIDDLE;

console.log(joeSeat);

export {}