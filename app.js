const express = require('express');
const exphbs  = require('express-handlebars');
const path = require('path');

const routes = require('./routes/index');

const app = express();

app.engine('hbs', exphbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use('/', routes)
 
app.listen(3000);