var express = require('express');
var app = express();

app.get('/hit', function (req, res) {
	console.log(req.ip + ";" + req.query.advert_id);
  	res.redirect(req.query.redirect);
});

app.listen(80, function () {
  console.log('App listening on port 3000!');
});