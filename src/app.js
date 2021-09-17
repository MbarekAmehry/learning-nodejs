const express = require('express');
var morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('../models/blogs');

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

// Mongoose and mongo sandbox routes
app.get('/add-blog', (req, res) => {
  const blog = new Blog({
    title: 'my Second blog post',
    snippet: 'On my way to be FullStack',
    body: 'The process of learning Nodejs and Express is REALLY FUN!!',
  });

  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/all-blogs', (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.get('/single-blog', (req, res) => {
  Blog.findById('6144c1a5e4f405c82f6e7632')
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      console.log(err);
    });
});

// Middleware and static files
app.use(morgan('dev'));
app.use(express.static('public'));

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
