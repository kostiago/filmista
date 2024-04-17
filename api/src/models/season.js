const mongoose = require("mongoose");

const Season = mongoose.model("Season", {
  movie_id: {
    type: mongoose.Types.ObjectId,
    ref: "Movies",
  },
  season_title: String,
});

module.exports = Season;
