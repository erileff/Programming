let numArray = [];

const getNums = i => {
    for (var i = 1; i <= 100; i++) {
        numArray.push(i);
    }
};

getNums();

const fizzBuzz = numArray.map(function(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        num = "FizzBuzz";
        console.log(num);
    } else if (num % 3 === 0) {
        num = "Fizz";
        console.log(num);
    } else if (num % 5 === 0) {
        num = "Buzz";
        console.log(num);
    } else {
        console.log(num);
    }
})

fizzBuzz;

/* Eloquent JavaScript solution:
for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
*/