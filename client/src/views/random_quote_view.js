const PubSub = require('../helpers/pub_sub.js');

const RandomQuoteView = function(container){
  this.container = container;
};

RandomQuoteView.prototype.bindEvents = function () {
  PubSub.subscribe('Quotes:random-quote-ready', (evt) => {
    this.render(evt.detail.quote);
  })
};

RandomQuoteView.prototype.render = function (quote) {
  this.container.innerHTML = '';
  const quoteParagraph = document.createElement('p');
  quoteParagraph.textContent = quote;
  quoteParagraph.addEventListener('click', (evt) => {
    PubSub.publish('RandomQuoteView:clicked');
  })
  this.container.appendChild(quoteParagraph);
};

module.exports = RandomQuoteView;
