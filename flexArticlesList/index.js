const articleData = [];
const shownArticleIndex = -1;
fetch("./articles-data/articles.json")
  .then(response => {
    if(!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    articleData.push(...data);
    console.log(articleData);
    list_show(articleData);
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });

//  {
//     "title": "Article 1",
//     "keywords": ["keyword1", "keyword2"],
//     "contentSummary": "This is a summary of the article",
//     "content": "This is the content of the article",
//     "author": "Author 1",
//     "date": "2020-01-01"
//   },


const articleHTML = (article, index) => {
  const articleKeywords = article.keywords
    .map(keyword => `<li class="keywords">${keyword}</li>`)
    .join("");

  return `
    <li class="article">
        <h1 class="article-title">
          <a href="#" data-index="${index}"
          >${article.title}</a>
        </h1>
        <div class="bottom-line"></div>
        <ul class="article-keywords">
          ${articleKeywords}
        </ul>
        <p class="article-summary">
          ${article.contentSummary}
        </p>
        <p class="article-author">
          by ${article.author.toUpperCase()}
        <p class="published-date">
          <span>
            ${article.date}
          </span>
        </p>
     </li>
  `;
}

const list_show = (articleData) => {
  const articlesList = document.querySelector("#articles-list");
  const totalArticlesNum = articleData.length;
  articlesList.innerHTML = `<h3>${totalArticlesNum} Articles</h3>`;
  const articlesHTMLs = articleData.map((article, index) => articleHTML(article, index));
  articlesList.innerHTML += articlesHTMLs.join("");
  articlesList.style.display = "block";
  const articlesContent = document.querySelector("#article-content");
  articlesContent.innerHTML = "";
  articlesContent.style.display = "none";
}

const article_content_show = (article) => {
  const articlesList = document.querySelector("#articles-list");
  articlesList.innerHTML = "";
  articlesList.style.display = "none";
  const articleContent = document.querySelector("#article-content");
  articleContent.style.display = "block";
  articleContent.innerHTML = `
    <a href="#" id="back-to-articles">Back to Articles</a>
    <h1 class="article-title">
      ${article.title}
    </h1>
    <div class="bottom-line"></div>
    <p class="article-author">
      by ${article.author.toUpperCase()}
    <p class="published-date">
      <span>
        ${article.date}
      </span>
    </p>
    <p class="article-content">
      ${article.content}
    </p>
  `;
}

const articlesList = document.querySelector("#articles-list");
articlesList.addEventListener("click", (e) => {
  e.preventDefault();
  const articleIndex = e.target.dataset.index;
  if(articleIndex) {
    article_content_show(articleData[articleIndex]);
  }
})
const articleContent = document.querySelector("#article-content");
articleContent.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(e.target.id);
  if(e.target.id === "back-to-articles") {
    list_show(articleData);
    console.log("back to articles");
  }
})
