import { MessageProps } from "../hooks/usePersonalHook";

interface MessagesAreaProps {
  messages: MessageProps[];
}

export function MessagesArea({messages}:MessagesAreaProps) {
  return (
    <div className="messagesArea">
      {messages.length == 0 ?
        <div>Nenhuma ideia encontrada.</div>
        :messages.map((data, index) => (
          <div key={index} className={`message`}
          style={{
            marginLeft: data.id == "user" ? "auto":0,
            marginRight: data.id == "bot" ? "auto":0,
            textAlign: "left"
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