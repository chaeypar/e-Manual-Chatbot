import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import cors from 'cors';
import configuration from './config.js';
import loginRouter from './routes/login.js';
import logoutRouter from './routes/logout.js';
import llamaindexRouter from './routes/llama_index.js';
import langchainRouter from './routes/langchain.js';
import path from 'path';
import fs from 'fs';

process.env.OPENAI_API_KEY = configuration.apiKey;

const app = express();
const port = 8000;
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(cors());
app.use(session({
	secret: 'samsung tv emanual',
	resave: true,
	saveUninitialized: true
}));

//https://www.youtube.com/@samsung_svc
app.use(express.static(path.join(__dirname, '../E-Manual-Chatbot/dist')));
app.use(express.static(path.join(__dirname, './img')));

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/llama_index', llamaindexRouter);
app.use('/langchain', langchainRouter);

app.get('/logo', function(request, response){
	fs.readFile('./img/logo.png', function(err, data){
		response.end(data);
	})
})

app.get('/logo.png', function(request, response){
    response.sendFile(path.join(__dirname, "../E-Manual-Chatbot/dist/logo.png"))
})


app.get('*', function(request, response){
    response.sendFile(path.join(__dirname, "../E-Manual-Chatbot/dist/index.html"))
})



app.listen(port, ()=>{console.log("server started!")});
