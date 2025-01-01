function checkJump(heights) {
  const maxHeightPosition = heights.indexOf(Math.max(...heights));
  const upHeights = heights.slice(0, maxHeightPosition);
  const downHeights = heights.slice(maxHeightPosition, heights.length - 1);

  return upHeights.every((item, i) => item <= heights[i + 1])
    && downHeights.every((item, i) => item >= heights[i + maxHeightPosition + 1])
    && upHeights.length !== 0
    && downHeights.length !== 0;
}