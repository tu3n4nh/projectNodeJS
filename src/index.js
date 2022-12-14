const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const app = express();
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const { engine } = require('express-handlebars');
const port = 3000;

const route = require('./routes/index.js'); // hoặc ./routes thôi vì nó tự nạp file index

app.use(express.static(path.join(__dirname, 'resources', 'views')));

//Create middleware
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// override method
app.use(methodOverride('_method'));

//HTTP logger
app.use(morgan('combined'));

//Template engine
app.engine(
    'hbs',
    engine({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));
console.log(__dirname);
// route '/'

//Home, search, contact

// Routes initial
route(app);
const db = require('./config/db');

// SASS routes
app.use('/assets', express.static(path.join(__dirname, '/public')));

// Connect to db
db.connect();
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
