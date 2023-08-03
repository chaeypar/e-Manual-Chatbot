import ChatbotView from "./ChatbotView.jsx";
import {useState} from 'react';

export default function Chatbot(props){
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
      
      fetch("http://localhost:8000"+props.type , {
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
        <ChatbotView chat={chat} chatbot={chatbot} message={message} sendMessage={sendMessage} setMessage={setMessage}/>
    )
}