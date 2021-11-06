const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");
const upload = multer();
const app = express();

const port = process.env.PORT || 4000;
 
const moviesRoute = require("./routes/Movie.Route");



app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
app.use(upload.array());

app.all("/", (req, res, next) => {
  res.send({
    message: "Hello My API",
  });
});

app.use("/movies", moviesRoute); 

app.listen(port, () => console.log(`:${port}`));
module.exports = app;
