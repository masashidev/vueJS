
srcText = "This is a simple text to test the basic simple algorithms";

targetWord = "simple";
textArray = srcText.split(" ");
textArray.forEach((word, index) => {
  if(word === targetWord) {
    console.log(`Word "${targetWord}" found at index ${index}`);
  }
});



function wordPosition(srcText, targetWord){
  let foundAt = [];
  let targetIndex = 0;
  for (let i = 0; i < srcText.length; i++) {
    // console.log(`srcText:${srcText[i]}, targetIndex:${targetIndex}`);

    if (srcText[i] === targetWord[targetIndex]) {
      targetIndex++;
    } else {
      targetIndex = 0;
    }
    if (targetIndex >= targetWord.length) {
      console.log(`Found At: ${i - targetWord.length + 1}`);
      foundAt.push(i - targetWord.length + 1);
    }
  }
  return foundAt;
}

console.log(wordPosition(srcText, targetWord));

