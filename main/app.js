require("dotenv/config");

// require("../main/db");  //=> mongoose

const express = require("express");

const app = express();

require("./config")(app);

const allRoutes = require("./routes/index.routes");
app.use("/api", allRoutes);

require("./error-handling")(app);

module.exports = app;
