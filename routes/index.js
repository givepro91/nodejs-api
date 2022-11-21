var express = require('express');
var router = express.Router();

let language = 'Javascript';
let expression = `I love ${language}`;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: expression });
});

router.get('/api/nodejs', function (req, res) {
  res.status(200).json({
    "message" : "hello get api nodejs"
  });
});

router.post('/api/nodejs', function (req, res) {
  res.status(200).json({
    "message" : "hello post api nodejs"
  });
});

module.exports = router;
