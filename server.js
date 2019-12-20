const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;



// Defines middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on Heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Ping route lets us test to make sure server is running
app.get('/ping', function (req, res) {
 return res.send('pong');
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});

