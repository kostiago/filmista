const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const database = require("./src/services/database");
const cors = require("cors");
const app = express();

const routes = require("./src/routes/movie.routes");
const userRoutes = require("./src/routes/login.routes");
const authRoutes = require("./src/routes/auth.routes");

//MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());
app.use(morgan("dev"));

//ROUTES
app.use("/", routes);
app.use("/user", userRoutes);
app.use("/auth", authRoutes);

app.listen(3000, () => {
  console.log("Server is Working!");
});
