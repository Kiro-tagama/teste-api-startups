interface InputApiProps{
  apiKey: string; 
  setApiKey: (value: string) => void;
  validApiKey: boolean;
}

export function InputApi(props: InputApiProps){
  const {apiKey,setApiKey,validApiKey} = props;

  return(
    <div className='inputArea'>
      <input type="text" 
        placeholder='Sua chave Api'
        value={apiKey}
        onChange={(e) => setApiKey(e.target.value)}
      />
      { apiKey === '' ?
        <button disabled>Validar</button>:
        <button disabled 
        style={{
          borderColor: validApiKey? 'green' :'red',
          color: validApiKey? 'green' :'red',
          cursor: 'unset'
        }}
        >{validApiKey?'Válido':'Inválida'}</button>
      }
    </div>
  )
}