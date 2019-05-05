const Quotes = require('./models/quotes.js');
const RandomQuoteView = require('./views/random_quote_view.js');

window.addEventListener('DOMContentLoaded',() => {
  console.log("Javascipt Loaded");

  const randomQuoteContainer = document.querySelector('.random-quote-wrapper');
  const randomQuoteView = new RandomQuoteView(randomQuoteContainer);
  randomQuoteView.bindEvents();

  const quotes = new Quotes();
  quotes.bindEvents();
  quotes.getQuotes();
})
