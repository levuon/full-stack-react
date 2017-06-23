const articleMock = {
  '987654': {
    articleTitle: 'javascript - artical one',
    articleContent: 'lalalala i am javascript from mock'
  },
  '123456': {
      articleTitle: 'web - artical two',
      articleContent: 'en i am web from mock'
  }
}

const article = ( state = articleMock, action ) => {
  switch (action.type) {
    case 'ARTICLES_LIST_ADD':
      console.log(action.payload.response);
      return Object.assign({},{ articles: action.payload.response })
    default:
      return state;
  }
}
export default article;
