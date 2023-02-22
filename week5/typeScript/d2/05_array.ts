// const superHeros = ["spiderman", "superman", "ironman", "wonderwomen"];
const superHeros: string[] = ["spiderman", "superman", "ironman", "wonderwomen"]


const numberArr: number[] = [1,2,3,4,5,6];
const superHeros2: Array<number> = [1,2,3,4,5];

type User = {
    name: string,
    isActive: boolean
};

const allUsers: User[] = [{name: "joe", isActive: false}, {name: "jane", isActive: true}];

const models: number[][] = [
    [255,255,255], //white
    [0,0,0], //black
];

// allUsers.push(21)
superHeros.push("aquaman");
numberArr.push(5);
allUsers.push({name: "joe", isActive: false});

export {}
