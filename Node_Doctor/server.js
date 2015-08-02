var port=8888;
var express=require('express');
var http=require('http');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');
var app            = express();
var server=http.createServer(app);
var admin=require('./route/route.js');
app.use(express.static(__dirname + '/public'));     // set the static files location /public/img will be /img for users
app.use(morgan('dev'));                     // log every request to the console
app.use(bodyParser.urlencoded({ extended: false }))    // parse application/x-www-form-urlencoded
app.use(bodyParser.json())    // parse application/json
app.use(methodOverride());                  // simulate DELETE and PUT
app.get('/',function(req,res){
	res.sendfile('view/admin.html');
});
app.post('adminlogin',admin.adminlogin);
app.get('/getAdminData',admin.adminGetAdminData);
server.listen(port);   
console.log('Magic happens on port'+port);          // shoutout to the user