let items = document.querySelectorAll(".item");
let itemsList = document.querySelector("#items-list");
let draggedItem = null;
console.log(itemsList);
// const itemsArray = Array.from(items);

const newItem = document.createElement("div");
newItem.classList.add("item");
newItem.textContent = "New Item";

itemsList.insertBefore(newItem, items[1]);

document.addEventListener("click" , (e) => {
  console.log(e.target);
  const target = e.target;
  // if(e.target.classList.contains("item")) {
  //   itemsList.removeChild(e.target);
  //   itemsList.insertBefore(target, null);
  // }

});
document.addEventListener("dragstart", (e) => {
  if(e.target.classList.contains("item")) {
    draggedItem = e.target;
    setTimeout(() => {
      e.target.style.display = "none";
      e.target.classList.add("dragging");
    }, 0);
  }
});

document.addEventListener("dragend", (e) => {
  if(e.target.classList.contains("item")) {
    e.target.style.display = "flex";
    e.target.classList.remove("dragging");
    draggedItem = null;
  }
});

document.addEventListener("dragover", (e) => {
  e.preventDefault();
});

document.addEventListener("dragenter", (e) => {
  if(e.target.classList.contains("item")) {
    e.target.classList.add("dragging-target");
  }
});

document.addEventListener("dragleave", (e) => {
  if(e.target.classList.contains("item")) {
    e.target.classList.remove("dragging-target");
  }
});

document.addEventListener("drop", (e) => {
  if(e.target.classList.contains("item")) {
    e.target.classList.remove("dragging-target");
    e.target.parentNode.insertBefore(draggedItem, e.target.nextSibling);
  }
});
