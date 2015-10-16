var express = require('express');
var app = express();

/* Use main.handlebar file as handlebar */
var handlebars = require('express-handlebars').create({defaultLayout:'main'});

/* Setting Handlebars as default engine */
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

/*Adding static middleware*/
app.use(express.static(__dirname + '/public'));

/*customized lib*/
var fortune = require('./lib/fortune.js');

app.get('/', function(req, res){
  res.send('hello nollu');
});

app.get('/gollu', function(req, res){
  res.send('hello gollu');
});

app.get('/mollu', function(req, res){
  res.send('hello mollu');
});

app.get('/about', function(req, res){
 res.render('about', {fortune : fortune.getFortune()});
});

app.listen(3000);
