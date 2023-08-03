import express from 'express';
import { changeText, changeText_full } from '../utils/change.js';
import llamaIndexChat from '../utils/llamaIndex.js'

var router = express.Router();

const suffix = ["와 비슷한 상황을 나타내는 질문의 index를 답해. 만약 그런 질문이 없다면 '없다'라고 답해", "의 해결책을 알려줘. 찾을 수 없으면 '없다'라고만 말해", ]

router.post('/pdf/qonly', (request, response) => {
    llamaIndexChat(request.body.chat, response, suffix[0], './llama/data/pdf_qonly', changeText);
})

router.post('/pdf/qna', (request, response) => {
    llamaIndexChat(request.body.chat, response, suffix[1], './llama/data/pdf_qna', changeText_full);
})

router.post('/txt/qonly', (request, response) => {
    llamaIndexChat(request.body.chat, response, suffix[0], './llama/data/txt_qonly', changeText);
})

router.post('/txt/qna', (request, response) => {
    llamaIndexChat(request.body.chat, response, suffix[1], './llama/data/txt_qna', changeText_full);
})


export default router;