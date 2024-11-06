import { useEffect, useState } from "react";
import { generateStartupIdea, validateApiKey } from "../api/openIaApi";

const envApiKey = import.meta.env.VITE_API_KEY ?? "";

export interface MessageProps{
  id: "user" | "bot";
  message: string;
}

export function usePersonalHook(){
  const [apiKey,setApiKey] = useState<string>(envApiKey);
  const [validApiKey,setValidApiKey] = useState<boolean>(false);

  const [messages,setMessages] = useState<MessageProps[]|[]>([]);

  async function getStatusValidateApi () {setValidApiKey(await validateApiKey(apiKey))}
  useEffect(()=>{
    getStatusValidateApi()
  },[apiKey])
  
  function sendMessage(message:string) {
    if (message.length == 0) return; 

    setMessages((prevMessages) => [
      ...prevMessages,
      { id: "user", message: message },
    ]);

    generateStartupIdea(apiKey, message)
    .then((idea) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        { id: "bot", message: idea },
      ]);
    })
    .catch((error) => console.error("Erro:", error));
  }

  return{
    apiKey,setApiKey,validApiKey,
    sendMessage,messages
  }
}