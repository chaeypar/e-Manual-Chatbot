import Navigation from "../Navigation/Navigation";
import sendImage from './img/send.png';
import robotImage from './img/robot.png';
import Assistant from "../Assistant/Assistant";

export default function ChatbotView(props){
    const generateItem = (chat, index) => {
      if (chat.role === "user"){
        return (
          <div key={index} className="chat-item-user">
            <div className="chat-user-wrapper">
              <div className="chat-time">{chat.time}</div>
              <div className="chat-content">{chat.content}</div>
            </div>
          </div>
        );
      }
      else{
        return (
          <div key={index} className="chat-item-assistant">
            <div className="chat-assistant-wrapper">
              <div className="chat-assistant-inside">
                <img className="chat-image-robot" src={robotImage}/>
                <div className="chat-content">{chat.content}</div>
              </div>
              <div className="chat-time">{chat.time}</div>
            </div>
          </div>
        );
      }
    }
    return (
        <div className="chat-customized">
          <Navigation/>
          <div className="chat-page">
              <div className="chat-title">Customized Chatbot</div>
              <div className="chat-box">
                {props.chat && props.chat.length
                ? props.chat.map((chat, index) => (
                  generateItem(chat, index)
                ))
                : ""}
              </div>
              <div className="chat-message">
                <form className="chat-message-form" action="" onSubmit={(e)=>props.sendMessage(e, props.message)}>
                    <input className="chat-message-inside" type="text" name="user_chat" value={props.message}
                      placeholder= {props.chatbot? "Chatbot is now creating an answer" : "Send a message"} 
                      onChange={(e)=>props.setMessage(e.target.value)} 
                      disabled={props.chatbot?true:false}/>
                    <div className = "chat-send"><input type="image" className="chat-send-image" src={sendImage}/></div>
                </form>
              </div>
          </div>
          <Assistant />
      </div>

      )
};