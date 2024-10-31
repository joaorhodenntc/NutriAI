import axios from 'axios';

export async function submitQuizAnswersToOpenAI(answers) {
  const apiKey = process.env.OPENAI_API_KEY;
  
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: 'gpt-3.5-turbo',
        messages: [
          { role: 'system', content: 'Você é um assistente que analisa respostas de um quiz.' },
          { role: 'user', content: `Aqui estão as respostas do quiz: ${JSON.stringify(answers)}` }
        ],
        max_tokens: 100
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        }
      }
    );
    console.log('Resposta da OpenAI:', response.data);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar as respostas para a OpenAI:', error);
    throw error;
  }
}