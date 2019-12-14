var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
    [
      {id : 1, username : "John Doe"},
      {id : 2, username : "Jane Doe"},
      {id : 3, username : "joe Doe"}
    ]
  )
});

module.exports = router;
