const database = require("../services/database");
const Movies = require("../models/movies");
const Season = require("../models/season");
const Chapter = require("../models/chapter");

const User = require("../models/user");
const userJson = require("../data/userJson.json");

const addSeasonChapter = async () => {
  try {
    const series = await Movies.find({ movie_type: "serie" }).select("_id");
    for (let serie of series) {
      console.log(`FILME ${serie}-------`);
      const numSeasons = Math.floor(Math.random() * 5) + 1;

      for (let i = 1; i <= numSeasons; i++) {
        console.log(`Inserindo temporada ${i} de ${numSeasons}`);
        const season = await new Season({
          movie_id: serie,
          season_title: `Temporada ${i}`,
        }).save();

        const numChapters = Math.floor(Math.random() * 5) + 1;
        for (let x = 1; x <= numChapters; x++) {
          console.log(`Inserindo episodeos ${x} de ${numChapters}`);

          await new Chapter({
            season_id: season._id,
            title_chapter: `Episódeos ${x}`,
            description_chapter:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ut mollis lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat. Praesent non nulla vel felis dapibus placerat. Nulla vel tincidunt nulla. Curabitur aliquet orci et sem aliquam fermentum. Curabitur eu ante et ex viverra lobortis. Quisque pharetra dolor non efficitur varius. Pellentesque neque mauris, venenatis in condimentum vitae, ultrices eget massa.",
            number_chapter: x,
            cover_chapter: "https://picsum.photos/id/237/200/300",
          }).save();
        }
      }
    }
    console.log("Final do Script");
  } catch (err) {
    console.log(err.message);
  }
};

addSeasonChapter();
