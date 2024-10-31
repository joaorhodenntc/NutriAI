"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import { useRouter } from "next/navigation";

export default function Quiz6() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual a sua rotina de trabalho?", answer);
    router.push("/quiz-final");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <Quiz 
              title="Qual o seu nível de atividade física atual?"
              options={[
                { letter: "A", text: "Predominantemente sedentária (exemplo: escritório)" },
                { letter: "B", text: "Moderada (exemplo: atividades em pé, andando)" },
                { letter: "C", text: "Alta intensidade (exemplo: construção civil)" }
               ]}
               onAnswerSelect={handleOptionClick}
        />
    </div>
  );
}
