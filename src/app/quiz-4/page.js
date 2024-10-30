"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Quiz4() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual sua altura (aproximada)?", answer);
    router.push("/quiz-5");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Quiz 
              title="Qual sua altura (aproximada)?"
              options={[
                { letter: "A", text: "1.50-1.59" },
                { letter: "B", text: "1.60-1.69" },
                { letter: "C", text: "1.69-1.79" },
                { letter: "D", text: "1.79-1.89" },
                { letter: "E", text: "1.89 ou mais" }
               ]}
               onAnswerSelect={handleOptionClick}
        />
    </div>
  );
}
