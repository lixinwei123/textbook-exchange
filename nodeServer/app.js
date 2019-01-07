const express = require('express');
const mysql = require('mysql');
const app = express();
//Create connection
const db = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password: '680927',
	database: 'textbook'
});
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
//Create DB
// app.get('/createdb', (req,res) => {
// 	let sql = 'CREATE DATABASE nodemysql';
// 	db.query(sql, (err, result) => {
// 		if(err) { throw err; } 
// 		console.log(result);
// 		res.send("database created ...");
// 	} );
// });

app.listen('3000', () => {
	console.log("Serer started on port 3000");
});