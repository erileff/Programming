// Use reduce and concat to "flatten" an array of arrays into a single array
let arrays = [["It's Gonna Be Me", 'Bye Bye Bye', 'This I Promise You'], ["Tearin' Up My Heart", 'I Want You Back'], ['Girlfriend', 'Celebrity']];

console.log(arrays.reduce((flat, currentValue) => flat.concat(currentValue), []));