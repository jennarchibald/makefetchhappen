const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js');

const Quotes = function(){
  this.quotes = null;
};

Quotes.prototype.bindEvents = function () {
  PubSub.subscribe('RandomQuoteView:clicked', (evt) => {
    this.publishRandom();
  })
};

Quotes.prototype.publishRandom = function () {
  const quotesCount = this.quotes.length;
  const randomQuoteIndex = Math.floor(Math.random() * quotesCount)
  const quote = this.quotes[randomQuoteIndex];
  PubSub.publish('Quotes:random-quote-ready', quote);
};

Quotes.prototype.getQuotes = function () {
  const url = window.location.origin;
  const request = new RequestHelper(`${url}/api/quotes`);
  request.get()
  .then((quotes) => {
    this.quotes = quotes;
    this.publishRandom();
  })
  .catch(console.error);
};

module.exports = Quotes;
