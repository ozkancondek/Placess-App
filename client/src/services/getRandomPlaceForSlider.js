export const getRandomCityForSlider = (cityCount, places) => {
  let randomCityIdArray = [];

  for (let i = 0; i <= cityCount; i++) {
    randomCityIdArray.push(places[Math.floor(Math.random() * places.length)]);
  }
  return randomCityIdArray;
};
