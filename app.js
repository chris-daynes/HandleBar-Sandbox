var express = require('express');
var hbs = require('express-handlebars');

var app = express();

app.engine('hbs', hbs({
  extname: '.hbs',
  defaultLayout: 'main'
}));
app.set('view engine', 'hbs');

app.get('/', require('./routes/home'));

console.log("Listening on port 3000")

app.listen(3000);
