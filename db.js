const models = require('./models');

models.user
  .create({
    name: 'John!',
  })
  .then((_) => console.log('Data is created!'));
