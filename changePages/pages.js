const links = document.querySelectorAll('menu ul li a');
console.log(links);
const content = document.querySelector('#content');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(link.id);
    loadContent(link.id);
  });
});


document.addEventListener('DOMContentLoaded', () => {
  fetch('./pages/newPage.html')
    .then(response => response.text())
    .then(data => {
      content.innerHTML = data;
      console.log(data);
    })
    .catch(error => {
      console.error(error);
    });
});

function loadContent(id) {
  fetch(`./pages/${id}.html`)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      content.innerHTML = data;
    })
    .catch(error => {
      console.error(error);
    });
}
