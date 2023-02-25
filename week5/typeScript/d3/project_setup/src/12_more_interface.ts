interface Player {
    name: string;
    health: number;
    score: number;
    isOnline: boolean;
}

interface Car {
    run(): void
}

class Game implements Player, Car{
    constructor(
        public name: string,
        public health: number,
        public score:number,
        public isOnline: boolean
    ){}

    run(): void {
        console.log("Car start to run!");
    }
}

const player: Game = new Game("Joe", 100, 0, true);
player.run();