// Requiring dependencies 
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

// Creating the port port
const PORT = process.env.PORT || 8080;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// How to connect locally "mongodb://localhost/YOUR DATA BASE NAME"
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

// Requiring routes
app.use(require("./routes/api-routes.js"));
app.use(require("./routes/html-routes.js"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});