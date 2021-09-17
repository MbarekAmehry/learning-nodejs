const express = require('express');
var morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('../routes/blog');

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
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// **** Basic routes ****
app.get('/', (req, res) => {
  res.redirect('/blogs');
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page' });
});

// Redirects
app.get('/about-us', (req, res) => {
  res.redirect('/about');
});

// **** blog routes ****
app.use('/blogs', blogRoutes); // scoping the routes, setting /blogs as inil valur of the route

// 404 - NOT FOUND
app.use((req, res) => {
  // must be at the bottom
  res.status(404).render('404');
});
