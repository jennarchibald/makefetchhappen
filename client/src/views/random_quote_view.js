const PubSub = require('../helpers/pub_sub.js');

const RandomQuoteView = function(container){
  this.container = container;
};

RandomQuoteView.prototype.bindEvents = function () {
  PubSub.subscribe('Quotes:random-quote-ready', (evt) => {
    this.render(evt.detail);
  })
};

RandomQuoteView.prototype.render = function (quote) {
  this.container.innerHTML = '';
  const quoteHeading = document.createElement('h2');
  quoteHeading.textContent = quote;
  this.container.appendChild(quoteHeading);
};

module.exports = RandomQuoteView;
