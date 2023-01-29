let numberArr = [22, 25, 11, 75, 64, 28, 256, 71];

let oddNumber = numberArr.filter(function(num) {
    return num % 2 === 1;
});

// console.log(oddNumber);

let peopleNames = ["Joe", "Jane", "Joel", "Kubilay", "Megan", "Adam", "Peter"];

let jPeople = peopleNames.filter(name => name.charAt(0) === "J");

// console.log(jPeople);

let comments = [
    {
        username: "testuser",
        comment: "Hello I am from Turkey",
        likes: 200,
        createdAt: "Jan 10"
    },
    {
        username: "adamsandler",
        comment: "Hello I am from United States",
        likes: 250,
        createdAt: "Jan 12"
    },
    {
        username: "nova",
        comment: "Hello I am from HK",
        likes: 225,
        createdAt: "Jan 15"
    },
    {
        username: "alondra",
        comment: "Hello I am from Mexico, and i m dacing",
        likes: 250,
        createdAt: "Jan 20"
    },
    {
        username: "mateus",
        comment: "Hello I am from brasil",
        likes: 230,
        createdAt: "Jan 25"
    }
];

let popularComments = comments.filter(comment => comment.likes >= 220);
console.log(popularComments);

