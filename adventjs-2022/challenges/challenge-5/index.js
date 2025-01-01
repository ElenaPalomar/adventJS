function getMaxGifts(giftsCities, maxGifts, maxCities) {
  const combinationArray = [0];

  giftsCities.map(() => {

    let citiesVisited = maxCities;
    let giftsGiven = maxGifts;
    let gifts = 0;

    for (let i = 0; i < giftsCities.length; i++) {

      if (citiesVisited === 0 || giftsGiven < 0) break

      else if (giftsCities[i] <= giftsGiven) {
        gifts += giftsCities[i];
        giftsGiven -= giftsCities[i];
        citiesVisited--;
        combinationArray.push(gifts);
      }

    }

    giftsCities.push(giftsCities.shift());
  })

  return Math.max(...combinationArray);
}