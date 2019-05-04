const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const createRouter = require('./helpers/create_router.js');

const quotes = require('./data/quotes');

const publicPath = path.join(__dirname, '../client/public');
app.use(express.static(publicPath));
app.use(bodyParser.json());

const quotesRouter = createRouter(quotes);
app.use('/api/quotes', quotesRouter);


app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
