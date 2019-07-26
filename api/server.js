const express = require('express');

const Autobots = require('../autobots/autobotsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ API: 'It WORKS!!!'});
});

server.get('/autobots', (req, res) => {
    Autobots.getAll()
    .then(autobots => {
      res.status(200).json(autobots);
})
.catch(error => {
    res.status(500).json(error);
   });
});

module.exports = server;