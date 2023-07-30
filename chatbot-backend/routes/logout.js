import express from 'express';
var router = express.Router();

router.get('/', function(request, response) {
	request.session.destroy();
	response.redirect('/');
});

export default router;