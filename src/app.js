const express = require('express');
var path = require('path');

const app = express();

// register view engine
app.set('view engine', 'ejs');
app.set('views', 'src/views');

// Listen for requests
app.listen(3000);

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

app.use((req, res, next) => {
  console.log('in the next middleware');
  next(); // this tells express to move on to the new middleware
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
