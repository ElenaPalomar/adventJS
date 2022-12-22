function selectSleigh(distance, sleighs) {
  const possibleSledges = sleighs.filter(item =>
    item.consumption * distance <= 20
  );

  return possibleSledges.length !== 0
    ? possibleSledges[possibleSledges.length - 1].name
    : null;
}