// Mock function to mimic fetching article data based on an index
function getArticleData(index) {
    // Replace this with the actual articles array or fetching logic
    
    return articles[index];
}

// This is your existing code where you call getArticleData
document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleIndex = parseInt(urlParams.get('index'), 10);
   
    fetch('articles.json')
        .then(response => response.json())
        .then(data => {
            const articles = data.articles;
            const articleData = articles[articleIndex];
            document.getElementById('article-title').textContent = articleData.title;
            document.getElementById('article-author').textContent = `Author: ${articleData.tags.author}`;
            document.getElementById('article-date').textContent = `Date: ${articleData.tags.date}`;
            // Set the content for other elements...
            document.getElementById('article-body').innerHTML = articleData.summary; // If summary contains HTML, use innerHTML
        });
            // if (!isNaN(articleIndex) && articleIndex >= 0 && articleIndex < articles.length) {
            //     const articleData = articles[articleIndex];
            //     document.getElementById('article-title').textContent = articleData.title;
            //     document.getElementById('article-author').textContent = `Author: ${articleData.tags.author}`;
            //     document.getElementById('article-date').textContent = `Date: ${articleData.tags.date}`;
            //     // Set the content for other elements...
            //     document.getElementById('article-body').innerHTML = articleData.summary; // If summary contains HTML, use innerHTML
            // } else {
            //     console.error('Article index is out of bounds or not defined');
            //     // Handle error...
            // }}
});

// document.addEventListener('DOMContentLoaded', function() {
//     // Assuming the JSON is stored locally and accessible at 'articles.json'
//     fetch('articles.json')
//       .then(response => response.json())
//       .then(data => displayArticles(data.articles)) // Access the 'articles' array in the JSON
//       .catch(error => console.error('Unable to load articles:', error));
//   });
  
//   function displayArticles(articles) {
//     const articlesContainer = document.getElementById('articles');
//     articlesContainer.innerHTML = ''; // Clear out existing content
  
//     articles.forEach(article => {
//       // Create article HTML elements
//       const articleElement = document.createElement('div');
//       articleElement.className = 'article';
      
//       const titleElement = document.createElement('h2');
//       titleElement.textContent = article.title;
      
//       const summaryElement = document.createElement('p');
//       summaryElement.textContent = article.summary;
      
//       // You can also include other tags like author, date, etc., if needed
//       const authorElement = document.createElement('p');
//       authorElement.textContent = `By ${article.tags.author}`;
  
//       const readMoreLink = document.createElement('a');
//       readMoreLink.href = '#'; // The href can be a link to the full article
//       readMoreLink.textContent = 'Read More';
//       readMoreLink.className = 'read-more-link';
      
//       // Append all elements to the article element
//       articleElement.appendChild(titleElement);
//       articleElement.appendChild(summaryElement);
//       articleElement.appendChild(authorElement);
//       articleElement.appendChild(readMoreLink);
      
//       // Append the article element to the articles container
//       articlesContainer.appendChild(articleElement);
//     });
//   }
  

