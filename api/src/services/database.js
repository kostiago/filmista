const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/filmista", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
