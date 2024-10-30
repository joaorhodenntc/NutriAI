"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Quiz5() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual o seu nível de atividade física atual?", answer);
    router.push("/quiz-6");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Quiz 
              title="Qual o seu nível de atividade física atual?"
              options={[
                { letter: "A", text: "Sedentário (pouca ou nenhuma atividade física)" },
                { letter: "B", text: "Leve (exercício 1-2 dias por semana)" },
                { letter: "C", text: "Moderado (exercício 3-4 dias por semana)" },
                { letter: "D", text: "Intenso (exercício 5 ou mais dias por semana)" },
                { letter: "E",  text:  "Atleta profissional" }
               ]}
               onAnswerSelect={handleOptionClick}
        />
    </div>
  );
}
