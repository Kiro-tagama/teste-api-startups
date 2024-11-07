import { MessageProps } from "../hooks/usePersonalHook";

interface MessagesAreaProps {
  messages: MessageProps[];
}

export function MessagesArea({messages}:MessagesAreaProps) {
  return (
    <div className="messagesArea">
      {messages.length == 0 ?
        <div style={{margin:"auto"}}>Nenhuma ideia encontrada. <br />Inicie a conversa digitando logo abaixo</div>
        :messages.map((data, index) => (
          <div key={index} className={`message ${data.id}`}
          style={{
            marginLeft: data.id == "user" ? "auto":0,
            marginRight: data.id == "bot" ? "auto":0,
            textAlign: "left",
            maxWidth: "90%"
          }}
          > 
            {data.id == "bot" ? <><span>bot:</span><br /></> : null}
            <p>{data.message}</p>
          </div>
        ))
      }
    </div>
  );
}