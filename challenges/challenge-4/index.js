function fitsInOneBox(boxes) {
  const allTrue = boxes.sort((a, b) => b.l - a.l)
    .every((box, i, boxesArray) => {
      if (i === boxesArray.length - 1) return true
      else return box.l > boxesArray[i + 1].l && box.w > boxesArray[i + 1].w && box.h > boxesArray[i + 1].h
    })
  return allTrue;
}