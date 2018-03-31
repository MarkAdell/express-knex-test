const express = require('express');
const knex = require('./db/knex.js');

const app = express();

app.get('/', async (req, res) => {
  const books = await knex.select().from('book');
  res.status(200).json({books});
});

app.post('/', async (req, res) => {
  const newBookID = await knex.insert({title: 'the alchemist'}).into('book');
  console.log('book has been saved, book id: ' + newBookID);
  res.status(200).json({ message: 'added book' });
});

module.exports = app;