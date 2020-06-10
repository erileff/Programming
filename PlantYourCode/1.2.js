const plant_1 = {
      gardenLocation: [1, 1],
      needsWater: true
 };
 
 const plant_2 = {
      gardenLocation: [1, 2],
      needsWater: false
 };
 
 const plant_3 = {
      gardenLocation: [2, 1],
      needsWater: false
 };
 
 const plant_4 = {
      gardenLocation: [2, 2],
      needsWater: true
 };
 
 const plants = [plant_1, plant_2, plant_3, plant_4];


/*
 Write a function that takes in your array of plants and 
 returns a new array of garden locations you should water.

 @param {array} plants - Your array of plants.
 @return {array} - An array of garden locations you should 
 water.
*/

function whereToWater(plantsArray) {
    const waterMap = plantsArray.filter(plant => {
        if(plant.needsWater) {
            plantsArray.map(plant => {
                return plant.gardenLocation}
            )}
    })
}

console.log(whereToWater(plants));