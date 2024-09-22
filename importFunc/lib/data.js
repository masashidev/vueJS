const pixels = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0, 1, 0],
  [0, 1, 1, 1, 1, 1, 1, 0],
];


const randomPixelData = (squaredSize) => {
  const pixelData = [];
  const size = squaredSize * squaredSize;
  for (let i = 0; i < size; i++) {
    const color = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
      a: 255,
    };
    pixelData.push(color);
  }
  return pixelData;
}

const stripePixelData = (oneEdgeLength) => {
  const pixelData = [];
  const primaryColor = {r: 102, g: 109, b: 243, a: 255};
  const secondaryColor = {r: 148, g: 205, b: 255, a: 255};
  const size = oneEdgeLength * oneEdgeLength;
  const xArray = Array.from({ length: oneEdgeLength }, (_, i) => 1);
  const yArray = Array.from({ length: oneEdgeLength }, (_, i) => 1);

  // [1]*EdgeL -> [0 || 1]*EdgeL
  xArray.forEach((_, i) => {
    const random = Math.random();
    xArray[i] = random < 0.5 ? 0 : 1;
  })
  console.log(xArray);
  yArray.forEach((_, i) => {
    const random = Math.random();
    yArray[i] = random < 0.5 ? 0 : 1;
  })


  // [] -> [primaryC || secondaryC] * size
  for (let i = 0; i < size; i++) {
    const x = i % oneEdgeLength;
    const y = Math.floor(i / oneEdgeLength);
    const color = (xArray[x] || yArray[y]) === 1 ? primaryColor : secondaryColor;
    pixelData.push(color);
  }
  return pixelData;
}

export { pixels, randomPixelData, stripePixelData };
