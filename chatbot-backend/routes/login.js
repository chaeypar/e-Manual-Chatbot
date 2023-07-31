import mysql from 'mysql2';
import express from 'express';
import nodemailer from 'nodemailer';
import { sqlConfig, authentication } from './config.js';
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : sqlConfig,
	database : 'emanual'
});

connection.connect();

var router = express.Router();

const url = 'http://localhost:8000';

router.post('/', function(request, response) {
	const email = request.body.email;
	const password = request.body.password;

	connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
		if (results.length > 0) {
			request.session.loggedin = true;
			request.session.email = email;
			request.session.username = results[0].username;
			response.redirect(url+'/');
		} else {
			const redirectUrl = url +'/login'
			response.write("<script>alert('Invalid email or password')</script>");
			response.write(`<script>window.location="${redirectUrl}"</script>`);
		}
	});
});

router.post('/register', function(request, response) {
	var username = request.body.username;
	var email = request.body.email;
	var password = request.body.password;

	connection.query('SELECT * FROM accounts WHERE email = ?', [email], function(error, results, fields) {
		if (results.length > 0) {
			response.redirect(url+'/login/register');
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			response.redirect(url+'/login/register');
		} else if (!/[A-Za-z0-9]+/.test(username)){
			response.redirect(url+'/login/register');
		}else if (password.length < 8){
			response.redirect(url+'/login/register');
		} else{
			var transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: authentication
			});
			var mailOptions = {
				from: '"Chaeyeon Park / E-manual Chatbot" <kidsland09@snu.ac.kr>',
				to: email,
				subject: 'Account Activation Required',
				text: 'for test'
			};
			connection.query('INSERT INTO accounts VALUES ( ?, ?, ?)', [username, password, email], function(error, results, fields) {
				transporter.sendMail(mailOptions, function(error, info) {
					if (error) {
						return console.log(error);
					}
					console.log('Message %s sent: %s', info.messageId, info.response);
				});
				response.redirect(url+'/login');
			});
		} 
	});

});

export default router;