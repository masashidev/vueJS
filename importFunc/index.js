import { pixels as pixels8x8, randomPixelData, stripePixelData } from './lib/data.js';

import { convertPixelDataToImageData } from './lib/pixel.js';

let imageSize = 450;

function generateImage(imageSize) {
  // pixelData{4 properties}
  const pixelData = stripePixelData(imageSize);

  // pixelArray -> canvas -> imageData -> imageDataUrl
  const imageDataUrl = convertPixelDataToImageData(pixelData);

  // imgElement(imageDataUrl)
  const img = document.createElement('img');
  img.classList.add('pixel-art');
  img.src = imageDataUrl;
  return img;
}

const main = document.querySelector('#main');

// imgHTMLElement
let img = generateImage(imageSize);
main.appendChild(img);

// click to update
main.addEventListener('click', () => {
  const existingImg = main.querySelector("img");
  if(existingImg) {
    main.removeChild(existingImg);
  }
  const newImg = generateImage(imageSize);
  main.appendChild(newImg);
  console.log('clicked');
});
