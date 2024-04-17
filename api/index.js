const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const database = require("./src/services/database");
const app = express();

const routes = require("./src/routes/main.routes");

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server is Working!");
});
