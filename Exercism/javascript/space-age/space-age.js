//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const earth = 31557600;
const planets = {
   'mercury': earth * 0.2408467,
   'venus': earth * 0.61519726,
   'mars': earth * 1.8808158,
   'jupiter': earth * 11.862615,
   'saturn': earth * 29.447498,
   'uranus': earth * 84.016846,
   'neptune': earth * 164.79132,
   'earth': earth * 1.0
};

export const age = (planet, sec) => {
    return Number((sec / planets[planet]).toFixed(2));
};

age('mercury', 3484389);