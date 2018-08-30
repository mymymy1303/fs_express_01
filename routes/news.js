var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function (req, res, next) {
	var obj;
	fs.readFile('./db/news.json', 'utf8', function (err, data) {
		if (err) throw err;
		obj = JSON.parse(data);
		res.render('news', {
			title: 'News',
			data: obj.data.news
		});
	});
});

module.exports = router;