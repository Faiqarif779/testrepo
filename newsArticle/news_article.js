var xhr = new XMLHttpRequest();
var url = 'news_article.json';
xhr.open('GET', url, true);
xhr.responseType = 'json';

xhr.onload = function(){
if (xhr.status >= 200 && xhr.status < 300) {
    var articles = xhr.response.articles;
      var articlesDiv = document.getElementById('articles');

      articles.forEach(function(article){
        var articleDiv = document.createElement('div');
        articleDiv.className = 'article';

        var title = document.createElement('h2');
        title.textContent = article.title;
        articleDiv.appendChild(title);

        var description = document.createElement('p');
        description.textContent = article.description;
        description.style.textDecoration = 'underline';
        description.style.fontStyle = 'italic';
        articleDiv.appendChild(description);

        var author = document.createElement('p');
        author.textContent = "Author: " + article.author;
        author.style.fontWeight = 'bold';
        author.style.color = 'blue';
        articleDiv.appendChild(author);

        var date = document.createElement('p');
        date.textContent = "Published on: " + article.date;
        date.style.fontStyle = 'italic';
        date.style.color = 'gray';
        articleDiv.appendChild(date);

        var category = document.createElement('h3');
        category.textContent = "Category: " + article.category;
        category.style.color = 'green';
        category.style.fontWeight = 'bold';
        category.style.textAlign = 'center';
        articleDiv.appendChild(category);

        var content = document.createElement('p');
        content.textContent = article.content;
        articleDiv.appendChild(content);

        articlesDiv.appendChild(articleDiv);
      });
}else{
  console.error('Failed to load articles:', xhr.statusText);
}
};
xhr.send();