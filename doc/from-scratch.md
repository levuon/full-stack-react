# from scratch

```sh
touch initData.js
```

```sh
[
  {
    articleId: '987654',
    articleTitle: 'javascript - artical one',
    articleContent: 'lalalala i am javascript from mongodb'
  },
  {
    articleId: '123456',
    articleTitle: 'web - artical two',
    articleContent: 'en i am web from mongodb'
  }
]
```

then import to mongoDb
```
mongoimport --db local --collection articles --jsonArray initData.js --host=127.0.0.1
```

```sh
npm i express@4.13.4 cors@2.7.1 body-parser@1.15.0 --save

npm i --save-dev babel@6.5.2
npm i --save-dev babel-core@6.6.5
npm i --save-dev babel-polyfill@6.6.1
npm i --save-dev babel-loader@6.2.4
npm i --save-dev babel-preset-es2015@6.6.0
npm i --save-dev babel-preset-react@6.5.0
npm i --save-dev babel-preset-stage-0@6.5.0
```

```sh
//$[[[your project directory]]]
mkdir server && cd server

touch index.js
```

```
//index.js
require('babel-core/register');
require('babel-polyfill');
require('./server');

```

```sh
//edit server/server.js

node server/index.js
```


## Redux
