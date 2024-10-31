"use client"
import { submitQuizAnswersToOpenAI } from "@/services/quizApi";
import { useQuiz } from "@/context/QuizContext";

export default function QuizFinal() {
  const { answers } = useQuiz();

  async function handleSubmit() {
    try {
      const response = await submitQuizAnswersToOpenAI(answers);
      console.log("Resposta da API OpenAI:", response);
    } catch (error) {
      console.error("Erro ao submeter respostas:", error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <button onClick={handleSubmit}>Gerar dieta</button>
    </div>
  );
}