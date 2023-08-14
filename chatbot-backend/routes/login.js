import mysql from 'mysql2';
import express from 'express';
import nodemailer from 'nodemailer';
import { sqlConfig, authentication } from './config.js';
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : sqlConfig,
	database : 'emanual',
	connectTimeout: 600000,
});

connection.connect();

var router = express.Router();

const url = '';

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
			const redirectUrl = url + '/login/register';
			response.write("<script>alert('This email address is already registered')</script>");
			response.write(`<script>window.location="${redirectUrl}"</script>`);
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			const redirectUrl = url + '/login/register';
			response.write("<script>alert('Check your email address!')</script>");
			response.write(`<script>window.location="${redirectUrl}"</script>`);
		} else if (!/[A-Za-z0-9]+/.test(username)){
			const redirectUrl = url + '/login/register';
			response.write("<script>alert('Username should only consist of alphabets and numbers')</script>");
			response.write(`<script>window.location="${redirectUrl}"</script>`);
		}else if (password.length < 8){
			const redirectUrl = url + '/login/register';
			response.write("<script>alert('Password is too short!')</script>");
			response.write(`<script>window.location="${redirectUrl}"</script>`);
		} else{
			var transporter = nodemailer.createTransport({
				host: 'smtp.gmail.com',
				port: 465,
				secure: true,
				auth: authentication
			});
			var mailOptions = {
				from: '"Chaeyeon Park / e-Manual Chatbot" <kidsland09@snu.ac.kr>',
				to: email,
				subject: 'Thank you for joining us, Samsung TV E-Manual Chatbot',
				text: 'Welcome!'
			};
			connection.query('INSERT INTO accounts VALUES ( ?, ?, ?)', [username, password, email], function(error, results, fields) {
				transporter.sendMail(mailOptions, function(error, info) {
					if (error) {
						return console.log(error);
					}
				});
				response.redirect(url+'/login');
			});
		} 
	});
});

export default router;