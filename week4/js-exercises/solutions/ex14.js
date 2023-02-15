// write your solution here
const rows = 26;
const seats = 100;

function printSeats(rows,seats) {
    for (let row = 0; row < rows; row++){
        for (let seat = 0; seat < seats; seat++) {
            console.log(`row: ${row} - seat: ${seat}`);
        }
    }
}

printSeats(rows, seats);