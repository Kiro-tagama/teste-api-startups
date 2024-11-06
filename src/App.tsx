import { useState } from 'react'
import { InputApi } from './components/inputApi'
import { usePersonalHook } from './hooks/usePersonalHook'
import './styles/App.css'
import { MessagesArea } from './components/messagesArea'

export default function App() {
  const {
    apiKey,setApiKey,validApiKey,
    sendMessage,messages
  } = usePersonalHook()

  const [text,setText]=useState<string>('')

  const inputApiProps = {apiKey,setApiKey,validApiKey}

  return (
    <div className='app'>
      <h1>Ideias de startups</h1>
      <InputApi {...inputApiProps}/>
      <p style={{margin:0,textAlign:'left'}}>chat:</p>
      <MessagesArea messages={messages}/>
      <div className='inputArea'>
        <input type="text" 
          placeholder='Digite aqui ...'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={()=>{
          sendMessage(text)
          setText('')
        }}>Send</button>
      </div>
    </div>
  )
}