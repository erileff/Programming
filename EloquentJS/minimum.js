// write a function, min, that takes two arguments and returns their minimum

const min = (num1, num2) => {
    if (num1 < num2) {
        return num1
    } else {
        return num2
    }
}

console.log(min(14, 5));