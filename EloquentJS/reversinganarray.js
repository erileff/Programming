function reverseArray(array) {
    let revArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        revArray.push(array[i]);
    }
    return revArray;
}

testArr = [1, 2, 3, 4, 5];
console.log(reverseArray(testArr));