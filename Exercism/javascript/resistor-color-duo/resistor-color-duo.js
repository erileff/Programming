//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const colors = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

 export const decodedValue = (array) => {
   const color1 = colors.indexOf(array[0]);
   const color2 = colors.indexOf(array[1]);
   return Number(`${color1}${color2}`);
};

