export async function generateStartupIdea(apiKey:string, userPrompt:string) {
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "Você é um assistente que gera ideias de startups inovadoras." },
        { role: "user", content: userPrompt }
      ],
      max_tokens: 100,
      temperature: 0.7
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
}

export async function validateApiKey(apiKey:string) {
  try {
    const response = await fetch("https://api.openai.com/v1/models", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`
      }
    });

    if (response.ok) {
      console.log("Chave API válida!");
      return true;
    } else {
      console.error("Chave API inválida ou sem permissões.");
      return false;
    }
  } catch (error) {
    console.error("Erro na validação da API:", error);
    return false;
  }
}