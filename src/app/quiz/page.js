"use client";
import { useState } from "react";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import Quiz from "@/components/quiz";
import { useRouter } from "next/navigation";
import QuizInput from "@/components/quizInput";
import questions from "@/data/questions";

export default function QuizSinglePage() {
  const router = useRouter();
  const { saveAnswer } = useQuiz();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleOptionClick = (answer) => {
    saveAnswer(questions[currentQuestionIndex].title, answer);

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      router.push("/dieta");
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen">
      <Image
        src="/assets/logo-nutriai.png"
        onClick={() => router.push("/")}
        className="mb-5 mt-10 cursor-pointer sm:w-36"
        alt="Logo"
        width={110}
        height={110}
      />
      {questions[currentQuestionIndex].type === "input" ? (
        <QuizInput
            title={questions[currentQuestionIndex].title}
            measure={questions[currentQuestionIndex].measure}
            min={questions[currentQuestionIndex].min}
            max={questions[currentQuestionIndex].max}
            onChange={handleOptionClick}
        />
        ) : (
        <Quiz
            title={questions[currentQuestionIndex].title}
            options={questions[currentQuestionIndex].options}
            onAnswerSelect={handleOptionClick}
          />
      )}
    </div>
  );
}
