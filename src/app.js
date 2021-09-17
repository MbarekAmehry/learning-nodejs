const express = require('express');
var morgan = require('morgan');
const mongoose = require('mongoose');

// connect to MongoDB
const dbURI =
  'mongodb+srv://mbarek:express123@learningexpress.lbthj.mongodb.net/firstExpress-tuts?retryWrites=true&w=majority';

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => {
    console.log('contected to db');
    // Listen for requests after db connection has been made.
    app.listen(3000);
  })
  .catch((err) => {
    console.log(err);
  });
const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Middleware and static files
app.use(morgan('dev'));
app.use(express.static('public'));
app.use((req, res, next) => {
  console.log('Method:', req.method);
  next(); // this tells express to move on to the new middleware
});

app.get('/', (req, res) => {
  const blogs = [
    {
      title: 'Yoshi finds eggs',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'Mario finds stars',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      title: 'How to defeat bowser',
      snippet: 'Lorem ipsum dolor sit amet consectetur',
    },
  ];
  res.render('index', { name: 'Mbarek', blogs });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/blog/create', (req, res) => {
  res.render('create');
});

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// 404 - NOT FOUND
app.use((req, res) => {
  // must be at the bottom
  res.status(404).render('404');
});
