// write your solution here

function factorialize(number) {
    let j = 1;
    for(let i = 1; i <= number; i++) {
        j = j * i;
    }
    return j;
}

factorialize(12); // 479001600