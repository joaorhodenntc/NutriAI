"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Quiz1() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual o seu principal objetivo com essa dieta?", answer);
    router.push("/quiz-2");
  };

  return (
    <div className="flex flex-col items-center min-h-screen" >
      <Image src="/assets/logo-nutriai.png" onClick={() => router.push("/")} className="mb-10 mt-10 cursor-pointer" alt="Logo" width={150} height={150} />
      <Quiz
              title="Qual o seu principal objetivo com essa dieta? 🥗"
              options={[
                { letter: "A", text: "Perda de peso"},
                { letter: "B", text: "Ganhar massa muscular"},
                { letter: "C", text: "Melhorar a saúde geral"},
                { letter: "D", text: "Aumentar a resistência"}
               ]}
               onAnswerSelect={handleOptionClick}
        />
    </div>
  );
}
