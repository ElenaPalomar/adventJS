function checkPart(part) {
  return [...part].some((item, i) => {
    const newPart = part.slice(0, i) + part.slice(i + 1);
    return newPart === [...newPart].reverse().join('');
  });
}