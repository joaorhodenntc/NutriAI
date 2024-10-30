"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Quiz2() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual sua faixa etária?", answer);
    router.push("/quiz-3");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Quiz 
              title="Qual sua faixa etária?"
              options={[
                { letter: "A", text: "Menos de 18 anos" },
                { letter: "B", text: "18-24 anos" },
                { letter: "C", text: "25-34 anos" },
                { letter: "D", text: "35-44 anos" },
                { letter: "E", text: "45 anos ou mais" }
               ]}
               onAnswerSelect={handleOptionClick}
        />
    </div>
  );
}
