/**
* Determines how many rows and columns your garden will
* need to be closest to a square given a number of seeds.
*
* @param {number} seedCount - The number of seeds in your
* seed packet.
* @return {array} - [rows, columns] needed for your grid
* layout (for example [4, 5] represents a 4 row x 5 column
* grid)
*/

function grid(seedCount) {
    let layout = [];

    const rows = Math.ceil(Math.sqrt(seedCount));
    // rounds up square root -- so if seedCount is 10, returns 4 (so that there's too much space, not too little for seeds)

    const columns = Math.ceil(seedCount / rows);

    return layout = [rows, columns]
    // if 23 seeds, returns [5, 5] -- a 5x5 square to hold 23 seeds
    // if 18 seeds, returns [5, 4] -- close to a square, and enough to hold 18 seeds
};

console.log(grid(23));
console.log(grid(40));
console.log(grid(18));
console.log(grid(33));