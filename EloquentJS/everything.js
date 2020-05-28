const every = (array, test) => {
    for (const value of array) {
        if (!test(value)) return false;
    }
    return true;
}

console.log(every([1, 3, 5], n => n < 10));
console.log(every([1, 3, 5], n => n < 4));