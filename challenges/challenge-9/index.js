function countTime(leds) {
  let lightsOff = [];

  leds = leds.join("").split("1");
  leds[0] += leds[leds.length - 1];

  leds.map(item => lightsOff.push(item.length));

  return Math.max(...lightsOff) * 7;
}