const express = require('express');
const shuffle = require('./shuffle.js');

const createRouter = function (data) {

  const router = express.Router();

  router.get('/', (req, res) => {
    res.json(data);
  });

  router.get('/random', (req, res) => {
    const randomIndex = Math.floor(Math.random() * data.length)
    res.json(data[randomIndex]);
  });

  router.get('/:count', (req, res) => {
    res.json(shuffle(data).slice(0, req.params.count));
  });

  return router;

};

module.exports = createRouter;
