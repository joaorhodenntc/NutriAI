"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Quiz5() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual o seu nível de atividade física atual?", answer);
    router.push("/quiz-6");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image src="/assets/logo-nutriai.png" onClick={() => router.push("/")} className="mb-10 mt-10 cursor-pointer" alt="Logo" width={150} height={150} />
      <Quiz 
              title="Qual o seu nível de atividade física atual? 🏃"
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
