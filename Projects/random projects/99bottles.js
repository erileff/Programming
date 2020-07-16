for (let counter = 99; counter >= 1; counter-=1) {
    if (counter > 1) {
    lyrics = `${counter} bottles of beer on the wall, ${counter} bottles of beer. Take one down, pass it around, ${counter - 1} bottles of beer on the wall.`;
    }
    else {
        lyrics = `${counter} bottle of beer on the wall, ${counter} bottle of beer. Take one down, pass it around, no more bottles of beer on the wall.`;
    }
    console.log(lyrics);
}

