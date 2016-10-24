module.exports = home;

var data = require('../db/data.json')

function home(req, res){
  res.render('home', data);
}
