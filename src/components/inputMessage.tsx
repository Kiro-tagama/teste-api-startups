import { useState } from "react"

export function InputMessage({sendMessage}:{sendMessage: (value: string) => void}) {
  const [text,setText]=useState<string>('')
  
  return(
    <div className='inputArea'>
      <input type="text" 
        placeholder='Digite aqui ...'
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(text)
            setText('')
          }
        }}
      />
      <button onClick={()=>{
        sendMessage(text)
        setText('')
      }}>Send</button>
    </div>
  )
}