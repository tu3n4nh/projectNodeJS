const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { engine } = require('express-handlebars');
const port = 3000;

const route = require('./routes/index.js'); // hoặc ./routes thôi vì nó tự nạp file index

app.use(express.static(path.join(__dirname, '/public')));

//Create middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);
// route '/'

//Home, search, contact

// Routes initial
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
