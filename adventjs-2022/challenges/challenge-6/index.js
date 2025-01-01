function createCube(size) {

  let top = '';
  let bottom = '';

  for (let i = 1; i <= size; i++) {

    const topBlanks = ' '.repeat(size - i);
    const topVertex = '/\\'.repeat(i);
    const topSide = '_\\'.repeat(size);
    top += topBlanks + topVertex + topSide + '\n';

    const bottomBlanks = ' '.repeat(i - 1);
    const bottomVertex = '\\/'.repeat(size + 1 - i);
    const bottomSide = '_/'.repeat(size);
    bottom += bottomBlanks + bottomVertex + bottomSide + '\n';

  }

  return (top + bottom).slice(0, -1);
}