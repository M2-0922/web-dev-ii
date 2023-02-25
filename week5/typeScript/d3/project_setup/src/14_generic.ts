// array
let strArr: Array<string> = ["1", "2"];
let numArr: Array<number> = [1, 2, 3, 4];
// let arr2: string[]

function identityOne(arg: number | string ): number | string {
    return arg;
}

identityOne("123");
identityOne(2);

function identityTwo(arg: any): any {
    return arg;
}

function identityThree<Type>(arg: Type): Type{
    return arg;
}

identityThree(5);
identityThree("hello")

function identityFourth<T>(arg: T): T{
    return arg;
}

interface Bottle{
    brand: string,
    volume: number,
    type: string,
}

identityFourth<Bottle>({ brand: "", volume: 0, type: ""})

function getSearchByIdResult<T>(products: T[]): T {
    return products[0];
}

function getSearchResults2<T>(products: T[]): T[] {
    // did lots of logic for finding searched keyword items
    return products;
}

// arrow function 

const regularArrowFunction = (arg: number): number => {
    return arg;
}

const genericArrowFunction1 = <T>(arg: T): T => {
    return arg;
}

const genericArrowFunction2 = <T>(arg: T[]): T[] => {
    return arg;
}

const genericArrowFunction3 = <T,>(arg: T[]): T[] => {
    return arg;
}

// 

function anotherFunction<T, Kubilay>(arg1: T, arg2: Kubilay): object{
    return {
        arg1, 
        arg2
    }
}

// anotherFunction<string, number>("Hello", 2);
// anotherFunction("Hello", 2);

// function anotherFunction2<T, U extends number>(arg1: T, arg2: U): object {
//     return {
//         arg1, 
//         arg2
//     }
// }

// anotherFunction2(5, 5)

interface Database {
    connection: string,
    username: string,
    password: string
}

function connectToDatabase<T>(database: T): T {
    return database;
}

function connectToDatabase1(database: Database): Database {
    return database;
}

// connectToDatabase({ connection: "", username: "", password: ""})
// connectToDatabase1({connection: "", username: "", password: ""})

connectToDatabase<Database>({ connection: "", username: "", password: ""})
connectToDatabase({ connection: "", username: "", password: ""})

// class

interface Quiz {
    id: number,
    title: string,
    description: string,
    type: string
}

interface Course {
    id: number,
    author: string,
    subject: string,
    type: string
}

class ClassService<T>{
    public orderOfSection: T[] = [];

    public addToOrder(item: T): void {
        this.orderOfSection.push(item);
    }
}

const quizService = new ClassService<Quiz>();
const courseService = new ClassService<Course>();

quizService.addToOrder({id: 0, title: "", description: "", type: ""})
courseService.addToOrder({id: 0, author: "", subject: "", type: ""})
