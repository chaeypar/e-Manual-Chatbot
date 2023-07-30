import mysql from 'mysql2';
import express from 'express';

var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : 'parkcy1128!',
	database : 'emanual'
});

connection.connect();

var router = express.Router();

const url = 'http://localhost:5173';

router.post('/', function(request, response) {
	const email = request.body.email;
	const password = request.body.password;

	if (email && password) {
		connection.query('SELECT * FROM accounts WHERE email = ? AND password = ?', [email, password], function(error, results, fields) {
			if (results.length > 0) {
				request.session.loggedin = true;
				request.session.email = email;
                request.session.username = results[0].username;
				response.redirect(url+'/');
			} else {
                response.write("<script>alert('Invalid email or password')</script>");
                response.write(`<script>window.location="${url}"</script>`);
			}
		});
	} else {
        response.write("<script>alert('Enter both email and password')</script>");
        response.write(`<script>window.location="${url}"</script>`);
	}
});

router.post('/register', function(request, response) {
	var username = request.body.username;
	var password = request.body.password;
	var email = request.body.email;

	if (username && password && email) {
		connection.query('SELECT * FROM accounts WHERE email = ?', [email], function(error, results, fields) {
			if (results.length > 0) {
                response.redirect(url+'/login/register');
			} else if (!/\S+@\S+\.\S+/.test(email)) {
                response.redirect(url+'/login/register');
			} else if (password.length < 8){
                response.redirect(url+'/login/register');
            } else{
				connection.query('INSERT INTO accounts VALUES (NULL, ?, ?, ?, NULL)', [username, password, email], function(error, results, fields) {
					response.redirect('/login');
				});
			} 
		});
	} else {
		response.redirect(url+'/login/register');
	}
});

export default router;