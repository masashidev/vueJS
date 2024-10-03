const list = document.querySelector('.list');
const listItems = document.querySelectorAll('.list-item');
let states= {
  highlightedCount: 0,
  ascending: true,
}

app.addEventListener("click", (e) => {
  console.log("clicked");
  if (e.target.classList.contains('list-item')) {
    e.target.classList.toggle('highlight');
  }
  shuffleListItems();
})

console.log(listItems);


function shuffleListItems() {
  const itemsArray = Array.from(listItems);
  for (let i = itemsArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [itemsArray[i], itemsArray[j]] = [itemsArray[j], itemsArray[i]];
  }
  list.innerHTML = '';
  itemsArray.forEach(item => list.appendChild(item));

  if(states.highlightedCount > itemsArray.length - 1) {
    states.ascending = false;
  } else if(states.highlightedCount <= 0) {
    states.ascending = true;
  }
  console.log(`itemsArrayLenght: ${itemsArray.length}`);
  console.log(`highlightedCount: ${states.highlightedCount}`);
  console.log(`ascending: ${states.ascending}`);
  states.ascending ? states.highlightedCount++ : states.highlightedCount--;
  states.ascending ? increaseHighlight(itemsArray, listItems) : decreaseHighlight(itemsArray, listItems);
}

function increaseHighlight(itemsArray, listItems) {
  let found = false;
  while(!found && !allHighlighted(itemsArray)) {

    let newIndex = Math.floor(Math.random() * listItems.length);
    if(listItems[newIndex].classList.contains("highlight")) {
      found = false;
      console.log("not found");
      continue;
    }
    listItems[newIndex].classList.toggle("highlight");
    found = true;
    console.log("found");
  }
}
function decreaseHighlight(itemsArray, listItems) {
  let found = false;
  while(!found && anyHighlighted(itemsArray)) {

    let newIndex = Math.floor(Math.random() * listItems.length);
    if(!listItems[newIndex].classList.contains("highlight")) {
      found = false;
      console.log("not found");
      continue;
    }
    listItems[newIndex].classList.toggle("highlight");
    found = true;
    console.log("found");
  }
}

function allHighlighted(array) {
  return array.every(item => item.classList.contains('highlight'));
}
function anyHighlighted(array) {
  return array.some(item => item.classList.contains('highlight'));
}
