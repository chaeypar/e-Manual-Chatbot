import { TextLoader } from "langchain/document_loaders/fs/text";
import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
import { OpenAIEmbeddings } from "langchain/embeddings/openai";
import { MemoryVectorStore } from "langchain/vectorstores/memory";
import { ChatOpenAI } from "langchain/chat_models/openai";
import { ConversationalRetrievalQAChain } from "langchain/chains";
import { BufferMemory } from "langchain/memory";
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import configuration from './config.js';
import {changeText, changeText_full} from './utils/change.js';
process.env.OPENAI_API_KEY = configuration.apiKey;

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(cors());

const loader_qonly = new TextLoader("../Fine-tuning/questions.txt");
const loader_qna = new TextLoader("../Fine-tuning/emanual.txt");
const pdfloader_qonly = new PDFLoader("../Fine-tuning/questions.pdf");
const pdfloader_qna = new PDFLoader("../Fine-tuning/emanual.pdf");

const docs_qonly = await loader_qonly.load();
const docs_qna = await loader_qna.load();
const pdfs_qonly = await pdfloader_qonly.load();
const pdfs_qna = await pdfloader_qna.load();

const textSplitter = new RecursiveCharacterTextSplitter({
  chunkSize: 500,
  chunkOverlap: 0,
});

//https://www.youtube.com/@samsung_svc

app.post('/langchain_txt/qonly', async (request, response) => {
    let chat = request.body.chat;
    const splitDocs = await textSplitter.splitDocuments(docs_qonly);
    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);
    const relevantDocs = await vectorStore.similaritySearch(chat);
    const memory = new BufferMemory({
        memoryKey: "chat_history",
        returnMessages: true,
    });
      
    const model = new ChatOpenAI({modelName:  "gpt-3.5-turbo"});
    const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
        memory
    });    
    const result = await chain.call({
        question: chat + "와 비슷한 상황을 나타내는 질문의 index를 답해. 만약 그런 질문이 없다면 '없다'라고 답해"
    });
    response.json({output: changeText(result.text)});  
});

app.post('/langchain_txt/qna', async(request, response) => {
    let chat = request.body.chat;
    const splitDocs = await textSplitter.splitDocuments(docs_qna);
    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await MemoryVectorStore.fromDocuments(splitDocs, embeddings);
    const relevantPdfs = await vectorStore.similaritySearch(chat);
    const memory = new BufferMemory({
        memoryKey: "chat_history",
        returnMessages: true,
    });
      
    const model = new ChatOpenAI({modelName:  "gpt-3.5-turbo"});
    const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
        memory
    });
    const result = await chain.call({
        question: chat + "의 해결책을 알려줘. 찾을 수 없으면 '없다'라고만 말해"
    });
    response.json({output: changeText_full(result.text)});
});

app.post('/langchain_pdf/qonly', async (request, response) => {
    let chat = request.body.chat;
    const splitPdfs = await textSplitter.splitDocuments(pdfs_qonly);
    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await MemoryVectorStore.fromDocuments(splitPdfs, embeddings);
    const relevantDocs = await vectorStore.similaritySearch(chat);
    const memory = new BufferMemory({
        memoryKey: "chat_history",
        returnMessages: true,
    });
      
    const model = new ChatOpenAI({modelName:  "gpt-3.5-turbo"});
    const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
        memory
    });    
    const result = await chain.call({
        question: chat + "와 비슷한 상황을 나타내는 질문의 index를 답해. 만약 그런 질문이 없다면 '없다'라고 답해"
    });
    response.json({output: changeText(result.text)});  
});

app.post('/langchain_pdf/qna', async (request, response) => {
    let chat = request.body.chat;
    const splitPdfs = await textSplitter.splitDocuments(pdfs_qna);
    const embeddings = new OpenAIEmbeddings();
    const vectorStore = await MemoryVectorStore.fromDocuments(splitPdfs, embeddings);
    const relevantPdfs = await vectorStore.similaritySearch(chat);
    const memory = new BufferMemory({
        memoryKey: "chat_history",
        returnMessages: true,
    });
      
    const model = new ChatOpenAI({modelName:  "gpt-3.5-turbo"});
    const chain = ConversationalRetrievalQAChain.fromLLM(model, vectorStore.asRetriever(), {
        memory
    });
    const result = await chain.call({
        question: chat + "의 해결책을 알려줘. 찾을 수 없으면 '없다'라고만 말해"
    });
    response.json({output: changeText_full(result.text)});
})

app.listen(port, ()=>{});
