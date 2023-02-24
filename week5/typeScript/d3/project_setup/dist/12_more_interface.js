"use strict";
class Game {
    constructor(name, health, score, isOnline) {
        this.name = name;
        this.health = health;
        this.score = score;
        this.isOnline = isOnline;
    }
    run() {
        console.log("Car start to run!");
    }
}
const player = new Game("Joe", 100, 0, true);
player.run();
