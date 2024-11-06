import { InputApi } from './components/inputApi'
import { usePersonalHook } from './hooks/usePersonalHook'
import './styles/App.css'
import { MessagesArea } from './components/messagesArea'
import { InputMessage } from './components/inputMessage'

export default function App() {
  const {
    apiKey,setApiKey,validApiKey,
    sendMessage,messages
  } = usePersonalHook()

  const inputApiProps = {apiKey,setApiKey,validApiKey}

  return (
    <div className='app'>
      <h1>Ideias de startups</h1>
      <InputApi {...inputApiProps}/>
      <p style={{margin:0,textAlign:'left'}}>chat:</p>
      <MessagesArea messages={messages}/>
      <InputMessage sendMessage={sendMessage}/>
    </div>
  )
}