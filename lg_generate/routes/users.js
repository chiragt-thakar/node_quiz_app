var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/registration', function(req, res, next) {
  // console.log(req.data);
  console.log(req.body.regFormData);
  // console.log(req.body.data);
  // let z =JSON.parse(req.body);
  // console.log(z);
  res.send("abc");
});

module.exports = router;
