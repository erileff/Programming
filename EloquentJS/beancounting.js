const countBs = str => {
    let numBs = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'B') {
            numBs += 1;
        }
    }
    return numBs;
}

const countChar = (str, char) => {
    let numChar = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            numChar += 1;
        }
    }
    return numChar;
}

console.log(countBs('My name is Billy Billson of the Billson clan'));

console.log(countChar('Lorelei\'s name is Lorelei, obviously', 'l'));