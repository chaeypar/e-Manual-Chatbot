import {useState} from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');
  const [chatbot, setChatbot] = useState(false);
  const [chat, setChat] = useState([]);

  const sendMessage = async (e, msg)=>{
    e.preventDefault();
    if (!msg)
      return;
  
    let chats = chat;

    chats.push({role: "user", content: msg});
    setChat([...chats]);
    setChatbot(true);
    setMessage('');
    console.log(chatbot);
    fetch("http://localhost:8000/", {
      method : "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        chat: msg
      })
    })
    .then((response) => response.json())
    .then((data) => {
      chats.push({role: "assistant", content : data.output});
      console.log(chatbot);
      setChat([...chats]);
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
            <span className="chat">{chat.content}</span>
          </p>
        ))
        : ""}
        <div className={chatbot ? "bot_time": "user_time"}>
          <p>
            <i>{chatbot? "Chatbot is now creating an answer" : ""}</i>
          </p>
        </div>
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