const express = require("express");
const router = express.Router(); 
const movies = require("../datas/movies.json");



router.get("/all", (req, res, next) => {


  res.send({ 
    length: movies.length,
    movies
  });
});
module.exports = router;