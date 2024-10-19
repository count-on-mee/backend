const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json('Hello node');
});

app.listen(7777);
