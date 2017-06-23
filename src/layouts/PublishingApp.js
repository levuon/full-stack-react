import React from 'react'
import {connect} from 'react-redux';
import falcorModel from '../falcorModel.js'
import { bindActionCreators } from 'redux'
import articleActions from '../actions/article.js'

class PublishingApp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount(){
    this._fetch()
  }

  async _fetch() {
    const articleLength = await falcorModel
      .getValue('articles.length')
      .then( length => length );

    const article = await falcorModel
      .get(['articles', { from: 0, to: articleLength - 1 },
        ['id', 'articleTitle', 'articleContent']])
      .then( articlesResponse => {
        return articlesResponse.json.articles
      }  );
    console.log(article);
    this.props.articleActions.articlesList(article);
  }

  render() {
    let articleJsx = [];
    const { articles } = this.props ;
    for (let articleKey in articles) {
      const articleDetails = articles[articleKey];
      const currentArticleJsx = (
        <div key={articleKey}>
          <h2>{articleDetails.articleTitle}</h2>
          <h3>{articleDetails.articleContent}</h3>
        </div>
      )
      articleJsx.push(currentArticleJsx);
    }
    return (
      <div>
        <h1>Our publishing app</h1>
        {articleJsx}
      </div>
    )
  }
}

export default connect(state => ({
  ...state
}), dispatch => ({
  articleActions: bindActionCreators(articleActions, dispatch)
}))(PublishingApp);
