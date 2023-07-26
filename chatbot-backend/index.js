import { TextLoader } from "langchain/document_loaders/fs/text";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {answers, reject_message, greeting_message} from './text.js';
import configuration from './config.js';

process.env.OPENAI_API_KEY = configuration.apiKey;

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const loader = new TextLoader("../Fine-tuning/questions.txt");
const docs = await loader.load();

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

const splitDocs = await textSplitter.splitDocuments(docs);

const embeddings = new OpenAIEmbeddings();

const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);

const memory = new BufferMemory({
  memoryKey: "chat_history",
  returnMessages: true,
});

const model = new ChatOpenAI({modelName:  "gpt-3.5-turbo"});
const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
  memory
});

function isNumber(ch){
    if (ch >= '0' && ch <= '9')
        return true;
    return false;
}

function changeText(text){
    const len = text.length;
    let i = 0;
    while (i < len){
        if (isNumber(text[i]))
            break;
        i++;
    }
    if (i == len)
        return reject_message;
    
    let num = 0;
    while (i < len){
        if (isNumber(text[i])){
            num = num * 10 + (text[i]-'0');
            i++;
        }
        else break;
    }
    return answers[num - 1];
}

//https://www.youtube.com/@samsung_svc
app.post('/', async (request, response) => {
    let chat = request.body.chat;
    const result = await chain.call({
        question: chat + "와 비슷한 상황을 나타내는 질문의 index를 답해. 만약 그런 질문이 없다면 '없다'라고 답해"
    });
    response.json({output: changeText(result.text)});  
});

app.listen(port, ()=>{});
