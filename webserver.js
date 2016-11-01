/* Yarden Halperin (ID 204540934), Yardem Moalem (ID 302865654), Almog Avivi (ID 308025725) */

var express = require("express");
var app = express();
var path = require("path");
var session = require('express-session');
var randomNumber;
//var app = express.create();

//start running
app.listen(3000);
console.log("listen on 3000")
app.use(express.static(path.join(__dirname, "/www")));

var bodyParser = require('body-parser');
app.use(bodyParser());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({ 
  secret: 'yarden_halperin',
  cookie: { maxAge: 60000 },
  saveUninitialized: true,
resave: true
}));

var walkers = [];
walkers.push({name:"Aria Starck",place:"Tel Aviv, Israel",mail:"jordenhl@gmail.com"});

//the data to find a walker
app.post("/findMatch", function(request, respons){
	console.log(request.body);
	var name = "";
	for (var walker in walkers) {
		if(walkers[walker].place == request.body.place) {
			name = walkers[walker].name;
			mail = walkers[walker].mail;
			break;
		}
	}
	if (name != "") {
		var data = {status:"success",name:name, mail:mail};
	} else {
		var data = {status:"fail"};
	}
	respons.send(data);
});

//adding walker
app.post("/addWalker", function(request, respons){
	console.log(request.body);
	var walker = {name:request.body.name,place:request.body.place,mail:request.body.mail};
	walkers.push(walker);
	respons.send(walker);
});


//adding users
var users = [];
users.push({name:"admin", password:"admin"});
users.push({name:"204540934", password:"yarden"});

app.post("/addUsers", function(request, respons){
	console.log(request.body);
	var user = {name:request.body.username, password:request.body.password};
	users.push(user);
	respons.send(user);
});


//if the usename and the password are correct, the server return "true"
app.post("/login", function(req, res) {
	console.log("login server");
	console.log(req.body);
	var username = "";
	for (var user in users) {
		if(users[user].name == req.body.username && users[user].password == req.body.password) {
			username = users[user].name;
			break;
		}
	}
	if (username != "") {
		req.session.user = 1;
		var data = {status:"success"};
	}
	else {
		req.session.user = 0;
		var data = {status:"fail"};
	}
	res.send(data);
});
