var express = require('express');
var bodyParser = require('body-parser');
var cmd = require('node-cmd');
var child_process = require('child_process');
var app = express();
var port = process.env.PORT || 3001;
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });
app.listen(port, function () {
console.log('Listening on port ' + port);
});
app.post('/hello', function (req, res, next) {
var userName = req.body.user_name;
var botPayload = {
text : 'Hello ' + userName + ', Abhishek rocks'
};
if (userName !== 'slackbot') {
return res.status(200).json(botPayload);
} else {
return res.status(200).end();
}});
child_process.exec('test.bat', function(error, stdout, stderr) {
console.log('here');
console.log(stdout);
});
