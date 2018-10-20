const app = require('express')();

app.use('/', (req, res, next) => {
  res.send('Hello!');
});

app.listen(8080);
