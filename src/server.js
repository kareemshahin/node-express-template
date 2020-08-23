const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const errorHandler = require('./middleware/error-handler');

const app = express();

app.use(bodyParser.json(), routes, errorHandler);

// Start server
app.listen(process.env.PORT || 3000, () => {
  console.log(`Server listening`);
});

module.exports = app;
