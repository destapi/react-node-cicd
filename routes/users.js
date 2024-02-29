const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{id: 1, name: "jimmy",}, {id: 2, name: "jackie",}]);
});

module.exports = router;
