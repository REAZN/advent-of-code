const fs = require("fs");
const input = fs.readFileSync("./02.txt", "utf8");

const games = input.split("\n").map(turn => turn.split(" "));
const values = { 
    A: 1, B: 2, C: 3,
    X: 1, Y: 2, Z: 3,
};

function rps(p2 = (elf, res) => res) {

    let score = 0;
    
    games.forEach(([a, b]) => {
        const valuesA = values[a];
        const valuesB = p2(valuesA, values[b]);
        if (valuesB - valuesA === 1 || valuesB - valuesA === -2) {
            score += 6
        } else if (valuesA === valuesB) {
            score += 3
        }
        score += valuesB
    })

    return score;
}


// Part 1
console.log(rps())

// Part 2
console.log(rps((elf, res) => {
    if (res === 1) return elf - 1 === 0 ? 3 : elf - 1;
    if (res === 3) return elf + 1 === 4 ? 1 : elf + 1;
    return elf;
}))