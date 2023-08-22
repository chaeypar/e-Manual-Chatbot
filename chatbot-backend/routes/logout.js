import express from 'express';
var router = express.Router();

router.get('/', function(request, response) {
	request.session.destroy();
	response.write(`<script>localStorage.clear()</script>`);
	response.write(`<script>window.location="/"</script>`);
});

export default router;