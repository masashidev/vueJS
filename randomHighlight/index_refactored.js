// DOM elements
const list = document.querySelector(".list");
const listItems = document.querySelectorAll(".list-item");
const app = document.querySelector("#app");

// Application state
const state = {
  highlightedCount: 0,
  ascending: true,
};

// Event listener for list item clicks
app.addEventListener("click", (e) => {
  if (e.target.classList.contains("list-item")) {
    toggleHighlight(e.target);

  }
  shuffleListItems();
});

// Toggle highlight on an item
function toggleHighlight(item) {
  item.classList.toggle("highlight");
  state.highlightedCount += item.classList.contains("highlight") ? 1 : -1;
}

// Shuffle list items
function shuffleListItems() {
  const itemsArray = Array.from(listItems);
  fisherYatesShuffle(itemsArray);
  renderList(itemsArray);
  updateHighlightState(itemsArray);
}

// Fisher-Yates shuffle algorithm
function fisherYatesShuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Render the shuffled list
function renderList(itemsArray) {
  list.innerHTML = "";
  itemsArray.forEach((item) => list.appendChild(item));
}

// Update highlight state and perform highlighting
function updateHighlightState(itemsArray) {
  state.ascending =
    state.highlightedCount <= 0 ||
    (state.highlightedCount < itemsArray.length - 1 && state.ascending);

  console.log(
    `Items: ${itemsArray.length}, Highlighted: ${state.highlightedCount}, Ascending: ${state.ascending}`
  );

  state.ascending
    ? increaseHighlight(itemsArray)
    : decreaseHighlight(itemsArray);
  state.highlightedCount += state.ascending ? 1 : -1;
}

// Increase highlight count
function increaseHighlight(itemsArray) {
  highlightRandomItem(
    itemsArray,
    (item) => !item.classList.contains("highlight")
  );
}

// Decrease highlight count
function decreaseHighlight(itemsArray) {
  highlightRandomItem(itemsArray, (item) =>
    item.classList.contains("highlight")
  );
}

// Highlight a random item based on a condition
function highlightRandomItem(itemsArray, condition) {
  const eligibleItems = itemsArray.filter(condition);
  if (eligibleItems.length > 0) {
    const randomItem =
      eligibleItems[Math.floor(Math.random() * eligibleItems.length)];
    randomItem.classList.toggle("highlight");
    console.log("Item highlighted/unhighlighted");
  } else {
    console.log("No eligible items found");
  }
}

// Helper functions
const allHighlighted = (array) =>
  array.every((item) => item.classList.contains("highlight"));
const anyHighlighted = (array) =>
  array.some((item) => item.classList.contains("highlight"));
