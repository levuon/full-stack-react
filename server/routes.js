const mongoose = require('mongoose');

// connect mongo
mongoose.connect('mongodb://localhost/local');
const articleSchema = {
  articleTitle: String,
  articleContent: String
};
const Article = mongoose.model('Article', articleSchema, 'articles');


const PublishingAppRoutes = [{
  route: 'articles.length',
  get: () => {
    return Article.count({}, (err, count) => count)
      .then(articleCountInDB => {
        return {
          path: ['articles', 'length'],
          value: articleCountInDB
        }
      })
  }
}, {
  route: 'articles[{integers}]["id", "articleTitle", "articleContent"]',
  get: pathSet => {
    const articlesIndex = pathSet[1];
    return Article.find({}, (err, articleDocs) => articleDocs)
      .then(articleArrayFromDB => {
        let results = [];
        articlesIndex.forEach(index => {
          const singleArticleObject = articleArrayFromDB[index].toObject();
          const falcorSingleArticleResult = {
            path: ['articles', index],
            value: singleArticleObject
          };
          results.push(falcorSingleArticleResult);
        });
        return results;
      })
  }
}];

module.exports = PublishingAppRoutes;
