# Samsung TV e-Manual Chatbot

I mainly used React, Nodejs and GPT API for this project.

## What is Samsung TV e-Manual Chatbot?

Samsung TV e-Manual Chatbot provides 8 versions of customized chatbot, which help users fix their problems with Samsung TV by themselves. 4 out of 8 are developed with langchain while the rest are developed with llama index. You can select the version of our customized chatbot with the assistant chatbot located in the right bottom whenever you want. 

## Details of our customized chatbots

### 1. (Langchain or Llama Index) + txt + qonly
They provide e-manual which only consists of 'frequently asked questions' with 'txt' format to the gpt-api. They receive the index of the question that is closely related with the situation of users from the gpt-api and offer solutions of the question to users. There are two versions, one with langchain and the other with llama index.

### 2. (Langchain or Llama Index) + txt + qna
They provide e-manual which consists of 'frequently asked questions and answers' with 'txt' format to the gpt-api. They ask the solutions of the users' situation and offer them to users directly. There are two versions, one with langchain and the other with llama index.

### 3. (Langchain or Llama Index) + pdf + qonly
They provide e-manual which only consists of 'frequently asked questions' with 'pdf' format to the gpt-api. They receive the index of the question that is closely related with the situation of users from the gpt-api and offer solutions of the question to users. There are two versions, one with langchain and the other with llama index.

### 4. (Langchain or Llama Index) + pdf + qna
They provide e-manual which consists of 'frequently asked questions and answers' with 'pdf' format to the gpt-api. They ask the solutions of the users' situation and offer them to users directly. There are two versions, one with langchain and the other with llama index.

## File structure of the project

There are 3 folders in the top-level, 'E-Manaul-Chatbot', 'chatbot-backend' and 'Fine-tuning'. 

'e-Manual-Chatbot' is for frontend, and I mainly used Reactjs framework for this part. It contains 2 child folders, i.e., 'public' and 'src', and the 'src' folder contains a 'components' folder, 'App.jsx', 'index.css' and others. I implemented my webapp with 'MVP' design pattern.

'chatbot-backend' is for backend, and I mainly used Nodejs for this part. It contains the 'routes' child folder, which provides routing of our web. 

'Fine-tuning' is for data of the project. It contains Samsung TV e-Manual data with a variety of format including '.txt', '.pdf', '.jsonl' and '.py'.

## How to set up the project

1. To use 'sign in' and 'sign out' services, you need to install mysql.
Create a database 'emanual' at first. Then, create a table 'accounts' which has 3 columns, username, email and password in the database.

2. Open the terminal and clone my project with the command 'git clone https://github.com/chaeypar/e-Manual-Chatbot.git emanual'.

3. Move to the cloned directory with the following command.
```
cd emanual
```

4. Move to the directory 'e-Manual-Chatbot' and do 'npm run build' with the following command.
```
cd e-Manual-Chatbot
npm run build
```

5. Now Move to the 'chatbot-backend' and start the server with the following command.
```
cd ../chatbot-backend
node index.js
```

6. You can see the message "server started!" in your console after a few seconds, which means that you are all ready. You should now open the browser and move to "http://localhost:8000". 

7. You can enjoy our service then!

## API Info

GPT-API provided by OPEN AI is used for the project. For more information about GPT API, you can go to the page https://platform.openai.com/

## Bugs and version update

If there are any updates related to unexpected bugs, I will let you know here. 

## The contributor of 'Samsung TV e-Manual Chatbot'

Chaeyeon Park, Seoul National University, Department of Mathematical Sciences