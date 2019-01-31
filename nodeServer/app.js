const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override')
const cors = require('cors');
//Create connection
const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: '680927',
	database: 'textbook'
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

//connect
db.connect((err) => {
	if(err) {
		console.log("error", err);
	}
	console.log("MySql connected..");
});

//Create table
app.get('/createpoststable', (req, res) => {
	let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
	db.query(sql, (err, result) => {
		// if(err) throw err;
		res.send('Posts table created...');
	});
});

app.get('/posts', function(req, res) {
    console.log("posts!");
    res.json({"success": true});
});
//Create DB
// app.get('/createdb', (req,res) => {
// 	let sql = 'CREATE DATABASE nodemysql';
// 	db.query(sql, (err, result) => {
// 		if(err) { throw err; } 
// 		console.log(result);
// 		res.send("database created ...");
// 	} );
// });
app.post('/createUser', function(req, res) {
    console.log("user info", req);
    var user_id = req.body.uid;
    var firstname = req.body.firstname;
    var lastname = req.body.lastname;
    var email = req.body.email;
    let sql = `INSERT into user VALUES('${user_id}','${email}','${firstname}','${lastname}');`;
    console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('user successful created!');
});

app.post('/postOwnBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	var method = parseInt(req.body.method);
	var price = parseInt(req.body.price);
	var title = req.body.bName;
	let sql = `INSERT into OWNED_BOOKS VALUES('${user_id}','${isbn}','${method}','${price}');`;
	let sql2 = `INSERT into BOOK_INFO VALUES('${isbn}','${title}');`
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	db.query(sql2, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('OwnBook successful created!');
});

app.post('/postNeedBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	var method = req.body.method;
	var price = req.body.price;
	var title = req.body.bName;
	let sql = `INSERT into NEED_BOOKS VALUES('${user_id}','${isbn}','${method}','${price}');`
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('needbook successful created!');
});

app.post('/getOwnedBooks', function(req,res){
	var user_id = req.body.uid;
	let sql = `SELECT * FROM OWNED_BOOKS WHERE usr_id = '${user_id}';`
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
		res.send(result);
	});
});

app.listen('3000', () => {
	console.log("Serer started on port 3000");
});