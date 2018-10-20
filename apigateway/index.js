const app = require('express')();
const axios = require('axios');

app.use('/message', async (req, res, next) => {
  const result = await axios.get('http://hello');
  res.send(result.data);
});

app.listen(8080);
