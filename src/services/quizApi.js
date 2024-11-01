const { CohereClientV2 } = require('cohere-ai');

export async function submitQuizAnswersToOpenAI(answers) {
  const cohere = new CohereClientV2({
    token: 'EteMKTdPQNEtHQiG3faUTk7ddmQyLSJCzxRZegtL',
  });
  
  try {
    const response = await cohere.chat({
      model: 'command-r-plus',
      messages: [
        {
          role: 'user',
          content: `Com base nessas respostas, faça uma dieta para mim, envie SOMENTE e DIRETAMENTE as refeições: ${JSON.stringify(answers)}`,
          //content: `Envie somente o nome de 5 alimentos com mais proteínas`,
        },
      ],
    });
    return response.message.content[0].text;
  } catch (error) {
    console.error('Erro ao enviar as respostas para a API:', error);
    throw error;
  }
}