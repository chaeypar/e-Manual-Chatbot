import ChatbotView from "./ChatbotView.jsx";
import {useState} from 'react';
import findTime from "../../../../chatbot-backend/utils/findTime.js";

export default function Chatbot(props){
    const [message, setMessage] = useState('');
    const [chatbot, setChatbot] = useState(false);
    const [chat, setChat] = useState([]);
  
    const sendMessage = async (e, msg)=>{
      e.preventDefault();
      if (!msg)
        return;
    
      let chats = chat;
      
      let user_time = findTime();
      
      chats.push({role: "user", content: msg, time: user_time});
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
        let assist_time = findTime();
        chats.push({role: "assistant", content : data.output, time: assist_time});
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