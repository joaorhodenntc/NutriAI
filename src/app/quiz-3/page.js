"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Quiz3() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual seu peso atual (aproximado)?", answer);
    router.push("/quiz-4");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Quiz 
              title="Qual seu peso atual (aproximado)?"
              options={[
                { letter: "A", text: "40-49" },
                { letter: "B", text: "50-59" },
                { letter: "C", text: "60-69" },
                { letter: "D", text: "70-79" },
                { letter: "E", text: "80 ou mais" }
               ]}
               onAnswerSelect={handleOptionClick}
        />
    </div>
  );
}
