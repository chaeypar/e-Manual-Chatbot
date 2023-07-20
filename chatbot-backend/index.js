import {Configuration, OpenAIApi} from "openai";
import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";
import configuration from "./config.js";
import mysql from "mysql2"

const app = express();
const port = 8000;

const configures = new Configuration({
    organization : configuration.organization,
    apiKey : configuration.apiKey
});

const openai = new OpenAIApi(configures);

app.use(bodyParser.json());
app.use(cors());

//https://www.youtube.com/@samsung_svc
app.post('/', async (request, response) => {
    const {history} = request.body;
    const result = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
            {
                role: "system",
                content: //"너는 삼성 TV e-manual Chatbot이야. 사용자의 질문에 대해 '네', '아니오', 숫자, '안녕' 외에 다른 어떤 말을 해서는 안 돼.\
                //질문이 영어이더라도 너는 무조건 한국어로 대답해야 해. 다시 한번, '네', '아니오', '안녕', 숫자 이 외의 다른 어떤 말도 하지마"
                "You are a Samsung TV E-Manual Chatbot.\
                You can help with problems related to screen, sound, soundbar, remote control, connection with external device, timeshift, recording, application in TV, self test, bixby and so on.\
                You must only answer 'hi' or 'yes' or 'no' or only numbers according to the user's message. Don't say any other words.\
                Only speak in English. Do not speak any other languages." 
            },
            ...history,
        ]
    });
    console.log(result.data.choices[0]);
    response.json({
        output: result.data.choices[0].message,
    });
});

app.listen(port, ()=>{});
