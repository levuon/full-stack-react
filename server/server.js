const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const falcor = require('falcor');
const falcorRouter = require('falcor-router');
const falcorExpress = require('falcor-express');
const routes = require('./routes.js');


const app = express();
app.server = http.createServer(app);

//CORS -- 3rd party middleware
app.use(cors());


app.use(bodyParser.json({
  extended: false
}));

const model = new falcor.Model({
  'cache': cache
});
app.use('/model.json', falcorExpress.dataSourceRoute((req,res) => {
  return new falcorRouter(routes)
}))

app.use(express.static('dist'));

app.server.listen(process.env.PORT || 3000);
console.log(`...🚀..., Started on port ${app.server.address().port}`);


module.exports = app;
