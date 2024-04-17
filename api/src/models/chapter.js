const mongoose = require("mongoose");

const Chapter = mongoose.model("Chapter", {
  season_id: {
    type: mongoose.Types.ObjectId,
    ref: "Season",
  },
  title_chapter: String,
  description_chapter: String,
  number_chapter: Number,
  cover_chapter: String,
});

module.exports = Chapter;
