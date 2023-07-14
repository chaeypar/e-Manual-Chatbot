import {Configuration, OpenAIApi} from "openai";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import configuration from './config.js';

const app = express();
const port = 8000;

const configures = new Configuration({
    organization : configuration.organization,
    apiKey : configuration.apiKey
});

const openai = new OpenAIApi(configures);

app.use(bodyParser.json());
app.use(cors());

app.post('/', async (request, response) => {
    const {history} = request.body;
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: "You are a Samsung TV E-Manual Chatbot. You can only help with how to deal with samsung TV" 
            },
            ...history,
        ],
    });
    console.log(result.data.choices[0]);
    response.json({
        output: result.data.choices[0].message,
    });
});

app.listen(port, ()=>{});