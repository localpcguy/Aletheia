// var express = require('express');
// var server = express();

// server.get('/', function(req, res) {
// 	res.send('Hello world!');
// });

// server.listen(3000);
// console.log('listening on 3000');
	
var kickstart = require('kickstart').withConfig({'name': 'alethia.local', 'port': 3000, 'path': __dirname});
var srv = kickstart.srv();

srv.all('*', function(req, res) {
	res.render('home', {title: 'Home'});
})

var router = kickstart.listen();
console.log('Listening on http://%s:%d', kickstart.conf().name, router.address().port);