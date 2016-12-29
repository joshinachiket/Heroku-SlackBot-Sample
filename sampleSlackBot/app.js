var express = require('express');
var bodyParser = require('body-parser');
var cmd = require('node-cmd');
var child_process = require('child_process');
var fs = require('fs');

var app = express();
var port = process.env.PORT || 3000;

// body parser middleware
app.use(bodyParser.urlencoded({
	extended : true
}));

// test route
app.get('/', function(req, res) {
	res.status(200).send('Hello world!');
});

app.listen(port, function() {
	console.log('Listening on port ' + port);
});

app.post('/hello', function(req, res, next) {
	var userName = req.body.user_name;

	var botPayload = {
		text : 'Hello ' + userName + ', Nachiket is rocks'
	};
	// Loop otherwise..
	if (userName !== 'slackbot') {
		return res.status(200).json(botPayload);
	} else {
		return res.status(200).end();
	}
});

var sample = "var express = require('express');\n" +
		"var bodyParser = require('body-parser');\n" +
		"var cmd = require('node-cmd');\n" +
		"var child_process = require('child_process');\n" +
		"var app = express();\n" +
		"var port = process.env.PORT || 3001;\n" +
		"app.use(bodyParser.urlencoded({ extended: true }));\n" +
		"app.get('/', function (req, res) { res.status(200).send('Hello world!'); });\n" +
		"app.listen(port, function () {\n" +
		"console.log('Listening on port ' + port);\n" +
		"});\n" +
		"app.post('/hello', function (req, res, next) {\n" +
		"var userName = req.body.user_name;\n" +
		"var botPayload = {\n" +
		"text : 'Hello ' + userName + ', Abhishek rocks'\n" +
		"};\n" +
		"if (userName !== 'slackbot') {\n" +
		"return res.status(200).json(botPayload);\n" +
		"} else {\n" +
		"return res.status(200).end();\n" +
		"}});\n" +
		"child_process.exec('test.bat', function(error, stdout, stderr) {\n" +
		"console.log('here');\n" +
		"console.log(stdout);\n" +
		"});\n";


fs.writeFile("./log/app.js", sample, function(err, string) {
	if (err) {
		return console.log(err);
	}

	console.log(string);
});


cmd.get('ls', function(data) {
	console.log('one\n', data);
});

child_process.exec('test.bat', function(error, stdout, stderr) {
	console.log('here');
	console.log(stdout);
});
