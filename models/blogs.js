const mongoose = require('mongoose');
const Schema = mongoose.Schema; // Constructure function

const blogSchema = new Schema(
  {
    title: { type: String, required: true },
    snippet: { type: String, required: true },
    body: { type: String, required: true },
  },
  {
    //Creates props ex: created_at, updated at
    timestamps: true,
  }
);

// Creating a Model
const Blog = mongoose.model('Blog', blogSchema);

module.exports = Blog;
