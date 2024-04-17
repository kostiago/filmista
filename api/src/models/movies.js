const mongoose = require("mongoose");

const Movies = mongoose.model("Movies", {
  title: {
    type: String,
    required: true,
  },

  movie_type: String,
  movie_cover: String,
  movie_logo: String,
  movie_thumb: String,
  movie_description: String,
  movie_gender: Array,
  movie_cast: Array,
  movie_filter: Array,
});

module.exports = Movies;
