const bankAccount = {
    balance: 1000,
    deposit(amount) {
      this.balance += amount;
    },
    withdraw(amount) {
      this.balance -= amount;
    }
};

// console.log(bankAccount.balance); // 1000
// bankAccount.deposit(100); 
// console.log(bankAccount.balance); // 1100
// bankAccount.withdraw(300);
// console.log(bankAccount.balance); // 800


// 

class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a sound.`);
    }
  }
  
  class Dog extends Animal {
    speak() {
      console.log(`${this.name} barks.`);
    }
  }
  
  class Cat extends Animal {
    speak() {
      console.log(`${this.name} meows.`);
    }
  }
  
  const dog = new Dog('Dog');
  dog.speak(); // "Dog barks."
  
  const cat = new Cat('Cat');
  cat.speak(); // "Cat meows."


  class Book {
    constructor(author, title, publicationYear) {
      this._author = author;
      this._title = title;
      this._publicationYear = publicationYear;
    }
  
    get author() {
      return this._author;
    }
  
    set author(newAuthor) {
      this._author = newAuthor;
    }
  
    get title() {
      return this._title;
    }
  
    set title(newTitle) {
      this._title = newTitle;
    }
  
    get publicationYear() {
      return this._publicationYear;
    }
  
    set publicationYear(newPublicationYear) {
      this._publicationYear = newPublicationYear;
    }
  }
  
  const myBook = new Book("John Doe", "My Book Title", 2020);
  const myBook2 = new Book("Jane Doe", "My Book Title", 2019);

  
  console.log(myBook.title);
  console.log(myBook2);
//   console.log(myBook.author); // John Doe
  myBook.author = "Jane Doe";
  
//   console.log(myBook.author); // Jane Doe
