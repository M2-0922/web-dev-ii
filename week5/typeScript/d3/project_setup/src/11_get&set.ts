class User {
    private _courseCount = 1;

    public email: string;
    public name: string;
    protected city: string = "Seoul";

    constructor(email: string, name: string){
        this.email = email;
        this.name = name;
    }

    get getCity(): string{
        return this.city;
    }

    get appleEmail(): string{
        return `apple.${this.email}`
    }

    get getCountCourse(): number {
        return this._courseCount;
    }

    set setCourseCount(val: number){
        if(val < 1){
            throw new Error("Course count cannot be less than 1")
            // console.log("Course count cannot be less than 1");
            // console.error("Course count cannot be less than 1")
            // console.warn("Course count cannot be less than 1")
        }
        this._courseCount = val;
    }


    // get
    // set
}

class Student extends User{
    // protected access modifiers is accessible here.
}

const person: User = new User("test@test.com", "jane");
// person._courseCount
person.getCountCourse
person.getCity // Seoul
person.setCourseCount = 1;
