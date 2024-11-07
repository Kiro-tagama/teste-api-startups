export async function generateStartupIdea(apiKey: string, userPrompt: string) {
  try {
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
      })
    });

    if (response.status === 429) {
      const retryAfter = response.headers.get('Retry-After');
      console.log(`Limite de requisições atingido. Tente novamente em ${retryAfter ? retryAfter : 'alguns'} segundos.`);
      return `Erro: Limite de requisições atingido. Tente novamente mais tarde.`;
    }

    if (!response.ok) {
      console.error("Erro na resposta:", response.status, response.statusText);
      return `Erro: ${response.statusText}`;
    }

    const data = await response.json();
    console.log("Ideia gerada:");
    return data.choices[0].message.content;

  } catch (error) {
    console.error("Erro ao gerar ideia:", error);
    return "Erro ao gerar ideia.";
  }
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