const app = require('express')();
const axios = require('axios');

app.use('/', async (req, res, next) => {
  try {
    const result = await axios.get('http://apigateway/message');
    const message = result.data;
    res.send(`<h1>${message}</h1>`);
  } catch (err) {
    res.send(err);
  }
});

app.listen(3000);
