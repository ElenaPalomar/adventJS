function getCompleted(part, total) {

  const calcMcd = (a, b) => {

    let rest;

    while (b !== 0) {
      rest = a % b;
      a = b;
      b = rest;
    }

    return a;
  }

  const partArray = part.split(':').map(item => parseInt(item));
  const totalArray = total.split(':').map(item => parseInt(item));

  const partSeconds = partArray[0] * 3600
    + partArray[1] * 60
    + partArray[2];
  const totalSeconds = totalArray[0] * 3600
    + totalArray[1] * 60
    + totalArray[2];

  const mcd = calcMcd(totalSeconds, partSeconds);

  return `${partSeconds / mcd}/${totalSeconds / mcd}`;
}