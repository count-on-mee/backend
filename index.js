const express = require('express');
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  res.json('Hello Express!');
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
