var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('hello', { title: '这是我自定义的拉' });
});

module.exports = router;
