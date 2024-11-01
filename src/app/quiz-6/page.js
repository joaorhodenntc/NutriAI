"use client"
import Quiz from "@/components/quiz";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Quiz6() {
  const { saveAnswer } = useQuiz();
  const router = useRouter();

  const handleOptionClick = (answer) => {
    saveAnswer("Qual a sua rotina de trabalho?", answer);
    router.push("/dieta");
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image src="/assets/logo-nutriai.png" onClick={() => router.push("/")} className="mb-10 mt-10 cursor-pointer" alt="Logo" width={150} height={150} />
      <Quiz 
              title="Qual a sua rotina de trabalho? 💼"
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
