require("dotenv/config");

// require("../main/db");  //=> mongoose

const express = require("express");

const app = express();

require("../main/config")(app);

const allRoutes = require("../main/routes/index.routes");
app.use("/api", allRoutes);

require("../main/error-handling")(app);

module.exports = app;
