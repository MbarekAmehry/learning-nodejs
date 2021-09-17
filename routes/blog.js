const express = require('express');
const Blog = require('../models/blogs');
const router = express.Router();

router.get('/', (req, res) => {
  Blog.find().then((result) => {
    res.render('index', { name: 'Mbarek', blogs: result });
  });
});

router.post('/', (req, res) => {
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect('/');
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get('/create', (req, res) => {
  res.render('create');
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render('single', { blog: result });
    })
    .catch((err) => {
      console.log(err);
    });
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: '/' });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
