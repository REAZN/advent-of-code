const fs = require("fs");
const input = fs.readFileSync("./01.txt", "utf8");

function calories(input, top) {
    const elves = input.split("\n\n").map(elf => 
        elf.split("\n")
            .map(cal => +cal)
            .reduce((a, b) => a + b)
    ).sort((a, b) => b - a)

    return elves.slice(0, top).reduce((a, b) => a + b)
}

// Part 1
console.log(calories(input, 1))

//Part 2
console.log(calories(input, 3))