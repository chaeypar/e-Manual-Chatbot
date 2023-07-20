import {useState} from 'react';
import './App.css';
import {text, reject_message, greeting_message} from './text';

function App() {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [chatbot, setChatbot] = useState(false);
  const [chat, setChat] = useState([]);

  const sendMessage = async (e, message)=>{
    e.preventDefault();
    if (!message)
      return;
  
    setChatbot(true);
    let histories = history;
    let chats = chat;
    let copy = message;
    let temp_message;


    temp_message = message + //"-> 이것이 인삿말이라면 적절한 인삿말로 답해줘. 그렇지 않다면, 이것이 삼성 TV에 탑재된 기능과 관련있는 문제인지 '예' 또는 '아니오'로 답해줘. 그 외 다른 어떤 말을 해서는 안 돼"
    "-> If it is a greeting message, you should also greet the user. If it is related to the problem caused by functions in TV manufactured by samsung, say 'yes'. Otherwise, say 'no'. Only speak in English";
    //": If it is a greeting message, say the appropriate words. Otherwise, say 'yes' or 'no' whether the given statement is related to the problem caused by TV produced by samsung.";
    histories.push({role: "user", content: temp_message});
    chats.push({role: "user", content: message});

    setHistory(histories);
    setChat(chats);
    setMessage('');

    fetch("http://localhost:8000/", {
      method : "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        history
      })
    })
    .then((response) => {console.log(response); return response.json()})
    .then((data) => {
      const content = data.output.content.toLowerCase();
      if (content === 'yes'){
        histories.push({"role":"assistant", content});
        setHistory(histories);

        temp_message = copy + "-> If the situation in the given sentence is similar to one of the following questions, say the index of it. Otherwise, say 'no' : " + text;
        //"-> 만약 이 문장이 나타내는 상황이 다음 텍스트에서 주어진 질문들 중 하나와 일치한다면 그 질문의 index를 답해. 만약 그 어떤 것과도 같지 않다면 'no'라고 답해 : "+text;
        histories.push({role: "user", content: temp_message});
        setHistory(histories);
        fetch("http://localhost:8000/", {
          method: "POST",
          headers:{
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({
            history
          })
        })
        .then((response)=>response.json())
        .then((data) => {
          console.log("!!!!");
          histories.push(data.output);
          chats.push(data.output);
        })
      }
      else if (content === 'no'){
        histories.push({"role":"assistant", "content" : reject_message});
        chats.push({"role":"assistant", "content" : reject_message})
      }
      else {
        histories.push({"role":"assistant", content});
        chats.push({"role" : "assistant", "content" : content});
      }
      setHistory(histories);
      setChat(chats);
      console.log(data.output);
      
      //histories.push(data.output)
      //setHistory(histories);
      setChatbot(false);
    })
    .catch((e) => {
      console.log(e);
    })
  };

  return (
    <main>
      <h1>Samsung TV E-Manual Chatbot</h1>
      <div className="chat_history">
        {chat && chat.length
        ? chat.map((chat, index) => (
          <p key={index} className={chat.role === "user" ? "userMessage" : "botMessage"}>
            <span className="role"><b>{chat.role.toUpperCase()}</b>:</span>
            <span className="chat">{chat.content}</span>
          </p>
        ))
        : ""}
      </div>
      <div className={chatbot ? "bot_time": "user_time"}>
        <p>
          <i>{chatbot? "Chatbot is now creating an answer" : ""}</i>
        </p>
      </div>
      <form action="" onSubmit={(e)=>sendMessage(e, message)}>
          <input type="text" name="user_chat" value={message}
          placeholder="Send a message"
          onChange={(e)=>setMessage(e.target.value)} />
      </form>
    </main>
  )
}

export default App;