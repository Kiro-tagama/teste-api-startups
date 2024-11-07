# Teste Api Startups

criado com TypeScript e React para interface

execute com 
```bash
  npm run dev
```
coloque sua chave api logo abaixo do titulo e terá um identificador de chave valida ao lado

![alt text](/src/assets/interface.png)

com sua chave válida, só encaminha a mensagem

---

encontrará o codigo de requisição na pasta `src/api/openaiApi.ts`

a requisição feita é um post para 
`https://api.openai.com/v1/chat/completions`


usando o modelo `gpt-3.5-turbo` que é recomendada para chats na documentação

e logo abaixo em mensagens temos a definição do sistema sendo ele um assistente para gerar ideias de startup e logo abaixo a mensagem passada pelo usuario (nós) a mensagem é representada pela variavel `userPropt`

![alt text](/src/assets/generateStartupIdea.png)

testando o chat ele deve oferecer suas repostas com base na pergunta feita e levando em consideração o prompt passado 
(dependendo da pergunta mesmo que igual ele pode ter respostas distintas)
![alt text](/src/assets/interfaceWithResponse.png)

---

obs: não vejo relevancia em estender a documentação pois o resto do codigo se trata de validações e interface e o objetivo é o consumo da api de ia
