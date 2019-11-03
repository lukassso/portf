
// const routes = require('./routes/index');
const express = require('express')
const app = express()
const port = 8080

// app.get('/', (req, res) => res.send('Hello World!'));

app.get('/', function (req, res) {
  res.render('index')
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

// app.use('jquery', express.static(__dirname + '/node_modules/jquery/dist/jquery'));

module.exports = app;