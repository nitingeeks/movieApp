const express = require('express');
const router = express.Router();
const fav = require('./favorite');

router.use(function(req, res, next)  {
  console.log('reached main index for routes');
next();
});

router.use(function(req, res, next) {
  console.log("hi");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "PUT,DELETE,POST,GET");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
router.use('/favorite', fav);

module.exports = router;
