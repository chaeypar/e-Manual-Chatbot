export default function ChatbotView(props){
    return (
        <main>
          <h1 className="samsung">Samsung TV E-Manual Chatbot</h1>
          <div className="chat_history">
            {props.chat && props.chat.length
            ? props.chat.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "userMessage" : "botMessage"}>
                <span className="chat">{chat.content}</span>
              </p>
            ))
            : ""}
            <div className={props.chatbot ? "bot_time": "user_time"}>
              <p>
                <i>{props.chatbot? "Chatbot is now creating an answer" : ""}</i>
              </p>
            </div>
          </div>
          <form action="" onSubmit={(e)=>props.sendMessage(e, props.message)}>
              <input type="text" name="user_chat" value={props.message}
              placeholder="Send a message"
              onChange={(e)=>props.setMessage(e.target.value)} />
          </form>
        </main>
      )
};