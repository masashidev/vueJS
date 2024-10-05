function updateArray(array, func){
  func(array);
  return array;
};
function reverseArray(array) {
  const midIndex = Math.floor(array.length/2);
  for(let i = 0; i < midIndex; i++){
    const temp = array[array.length - 1 - i];
    array[array.length - 1 - i] = array[i];
    array[i] = temp;
  }
};
let arr = [1,4,2,4,43,2,79,94];
arr = updateArray(arr, reverseArray);
console.log(arr);

arr = updateArray(updateArray(arr, reverseArray), (arr)=>{arr[0] = 1000 })
console.log(arr);


let data = [1,3,4,3,53,5,24];

