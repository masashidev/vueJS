
// pixel Data = [
//   { r: 255, g: 0, b: 0, a: 255 }
//   * any size of square number
// }
function convertPixelDataToImageData(pixelData) {
  // if (pixelData.length !== 64) {
  //   throw new Error('Pixel data array must have exactly 64 elements.');
  // }

  const pixelDataSize = pixelData.length;
  const gridSize = Math.sqrt(pixelDataSize);
  // pixelData must be a square number
  if (gridSize % 1 !== 0) {
    throw new Error('Pixel data array must have a square number of elements.');
  }

  const canvas = document.createElement('canvas');
  canvas.width = gridSize;
  canvas.height = gridSize;
  const context = canvas.getContext('2d');
  const imageData = context.createImageData(gridSize, gridSize);

  for (let i = 0; i < pixelDataSize; i++) {
    const x = i % gridSize;
    const y = Math.floor(i / gridSize);
    const index = (x + y * gridSize) * 4;

    const color = pixelData[i];

    imageData.data[index] = color.r;     // Red
    imageData.data[index + 1] = color.g; // Green
    imageData.data[index + 2] = color.b; // Blue
    imageData.data[index + 3] = color.a; // Alpha
  }

  context.putImageData(imageData, 0, 0);
  return canvas.toDataURL();
}

// Example usage:
const pixelData = [
  { r: 255, g: 0, b: 0, a: 255 }, // Red
  { r: 0, g: 255, b: 0, a: 255 }, // Green
  // ... (62 more pixel objects)
];


export { convertPixelDataToImageData };
