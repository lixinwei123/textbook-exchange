const express = require('express');
const mysql = require('mysql');
const app = express();
const bodyParser = require('body-parser');
const logger = require('morgan');
const methodOverride = require('method-override')
const cors = require('cors');
//Create connection
app.use(express.static("../src/pages/home/"));
const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: 'Huuvy123',
	database: 'Tutorial'
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
// app.get('/createpoststable', (req, res) => {
// 	let sql = 'CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY (id))';
// 	db.query(sql, (err, result) => {
// 		// if(err) throw err;
// 		res.send('Posts table created...');
// 	});
// });

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
    let sql = `INSERT into USER VALUES('${user_id}','${email}','${firstname}','${lastname}');`;
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
	let sql = `INSERT into OWNED_BOOKS VALUES('${user_id}','${isbn}','${method}','${price}','${title}');`;
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
//VY AND TRUNG, MODIFY THIS FUNCTION THAT I COPIED:
app.post('/postNeedBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	var method = parseInt(req.body.method);
	var price = parseInt(req.body.price);
	var title = req.body.bName;
	let sql = `INSERT into NEED_BOOKS VALUES('${user_id}','${isbn}','${method}','${price}','${title}');`;
	let sql2 = `INSERT into BOOK_INFO VALUES('${isbn}','${title}');`
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	db.query(sql2, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('NeedBook successful created!');
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

app.post('/getNeededBooks', function(req,res){
	var user_id = req.body.uid;
	let sql = `SELECT * from NEED_BOOKS WHERE usr_id = '${user_id}';`
	console.log("sql", sql);
	db.query(sql, (err, result) => {
		console.log("result", result, "error", err)
		res.send(result);
	});
});

app.post('/editBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	var method = req.body.method;
	var price = req.body.price;
	var title = req.body.bName;
	var oldisbn = req.body.oldisbn
	let sql = `UPDATE OWNED_BOOKS SET isbn = '${isbn}', method = '${method}', price = '${price}', title = '${title}' WHERE usr_id = '${user_id}' and isbn = '${oldisbn}';`;
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('edited book successfully');
});

app.post('/editNeededBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	var method = req.body.method;
	var price = req.body.price;
	var title = req.body.bName;
	var oldisbn = req.body.oldisbn
	let sql = `UPDATE NEED_BOOKS SET isbn = '${isbn}', method = '${method}', price = '${price}', title = '${title}' WHERE usr_id = '${user_id}' and isbn = '${oldisbn}';`;
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('edited book successfully');
});

app.post('/deleteBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	let sql = `DELETE FROM OWNED_BOOKS WHERE isbn = '${isbn}' and usr_id = '${user_id}' LIMIT 1;`;
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('entry Deleted');
});

app.post('/deleteNeededBook', function(req,res){
	var user_id = req.body.uid;
	var isbn = req.body.isbn;
	let sql = `DELETE FROM NEED_BOOKS WHERE isbn = '${isbn}' and usr_id = '${user_id}';`;
	console.log("sql",sql);
	db.query(sql, (err, result) => {
		console.log("result",result,"error",err)
	});
	res.send('entry Deleted');
});

app.post('/findExchanger', function(req,res){
	var user_id = req.body.user_id;
	let sql = `CREATE TABLE ${user_id}(
OWNED_ISBN VARCHAR(13),
OWNED_Title VARCHAR(100),
NEED_ISBN VARCHAR(13),
NEED_Title VARCHAR(100));`;
   
	let sql2 = `INSERT INTO ${user_id} (OWNED_ISBN, OWNED_Title, NEED_ISBN, NEED_Title)
SELECT OWNED_BOOKS.ISBN, OWNED_BOOKS.title, NEED_BOOKS.ISBN, NEED_BOOKS.title
FROM OWNED_BOOKS, NEED_BOOKS WHERE OWNED_BOOKS.usr_id = "${user_id}"
AND NEED_BOOKS.usr_id = "${user_id}";`;

	let sql3 = `SELECT DISTINCT USER.first_name, USER.last_name, USER.email, OWNED_ISBN, OWNED_Title, NEED_ISBN, NEED_Title
FROM ${user_id}
JOIN OWNED_BOOKS
ON OWNED_BOOKS.ISBN = ${user_id}.NEED_ISBN
JOIN NEED_BOOKS
ON NEED_BOOKS.ISBN = ${user_id}.OWNED_ISBN
JOIN USER
ON OWNED_BOOKS.usr_id = USER.id
WHERE OWNED_BOOKS.METHOD != 2 AND NEED_BOOKS.METHOD != 2 AND NEED_BOOKS.usr_id != "${user_id}";`;

	let sql4 = `DROP TABLE ${user_id};`;
	console.log("slq", sql);
	db.query(sql, (err, result) => {
		console.log("result", result, "error", err)
	});
	db.query(sql2, (err, result) => {
		console.log("result", result, "error", err)
	});
	db.query(sql3, (err, result) => {
		console.log("result", result, "error", err)
		res.send(result);
	});
	db.query(sql4, (err, result) => {
		console.log("result", result, "error", err)
	});
});

app.post('/findSeller', function(req, res){
	var user_id = req.body.user_id;
	let sql = `SELECT DISTINCT USER.first_name, USER.last_name, USER.email, NEED_BOOKS.ISBN, NEED_BOOKS.title, OWNED_BOOKS.PRICE
FROM NEED_BOOKS
JOIN OWNED_BOOKS
ON NEED_BOOKS.ISBN = OWNED_BOOKS.ISBN AND NEED_BOOKS.PRICE >= OWNED_BOOKS.PRICE
JOIN USER
ON OWNED_BOOKS.usr_id = USER.id
WHERE OWNED_BOOKS.METHOD != 1 AND NEED_BOOKS.METHOD != 1 AND NEED_BOOKS.usr_id = "${user_id}";`;
	console.log("sql", sql);
	db.query(sql, (err, result) => {
		console.log("result", result, "error", err)
		res.send(result);
	});
});

app.post('/findBuyer', function(req, res){
	var user_id = req.body.user_id;
	let sql = `SELECT DISTINCT USER.first_name, USER.last_name, USER.email,  OWNED_BOOKS.ISBN, OWNED_BOOKS.title, OWNED_BOOKS.PRICE
FROM NEED_BOOKS
JOIN OWNED_BOOKS
ON NEED_BOOKS.ISBN = OWNED_BOOKS.ISBN AND NEED_BOOKS.PRICE >= OWNED_BOOKS.PRICE
JOIN USER
ON NEED_BOOKS.usr_id = USER.id
WHERE OWNED_BOOKS.METHOD != 1 AND NEED_BOOKS.METHOD != 1 AND OWNED_BOOKS.usr_id = "${user_id}"`;
	console.log("sql", sql);
	db.query(sql, (err, result) => {
		console.log("result", result, "error", err)
		res.send(result);
	});
});

app.listen('3000', () => {
	console.log("Serer started on port 3000");
});