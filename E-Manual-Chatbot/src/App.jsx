import {useState} from 'react';
import './App.css';

function App() {
  const [history, setHistory] = useState([]);
  const [message, setMessage] = useState('');
  const [chatbot, setChatbot] = useState(false);

  const sendMessage = async (e, message)=>{
    e.preventDefault();
    if (!message)
      return;
  
    setChatbot(true);
    
    let histories = history;
    histories.push({role: "user", content: message});
    setHistory(histories);
    setMessage('');

    fetch("http://localhost:8000/", {
      method : "POST",
      headers:{
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        message,
        history
      })
    })
    .then((response) => {console.log(response); return response.json()})
    .then((data) => {
      histories.push(data.output);
      setHistory(histories);
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
        {history && history.length
        ? history.map((chat, index) => (
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