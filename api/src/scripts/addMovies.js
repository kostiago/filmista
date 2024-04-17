const database = require("../services/database");

const Movies = require("../models/movies");
const movieJson = require("../data/movie.json");

const addMovies = async () => {
  try {
    for (let movie of movieJson) {
      console.log(`Inserindo ${movie.titulo}`);
      await new Movies(movie).save();
    }
    console.log("Final do Script");
  } catch (err) {
    console.log(err.message);
  }
};

addMovies();
