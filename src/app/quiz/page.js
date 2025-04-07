"use client"
import { useState } from "react"
import { useQuiz } from "@/context/QuizContext"
import Image from "next/image"
import Quiz from "@/components/quiz"
import { useRouter } from "next/navigation"
import QuizInput from "@/components/quizInput"
import questions from "@/data/questions"
import { ChevronLeft, Salad} from "lucide-react"

export default function QuizSinglePage() {
  const router = useRouter()
  const { saveAnswer } = useQuiz()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

  const handleOptionClick = (answer) => {
    saveAnswer(questions[currentQuestionIndex].title, answer)

    const nextQuestionIndex = currentQuestionIndex + 1
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex)
    } else {
      router.push("/dieta")
    }
  }

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1)
    } else {
      router.push("/")
    }
  }

  const progress = (currentQuestionIndex / (questions.length - 1)) * 100
  const currentQuestion = questions[currentQuestionIndex]

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-[#f8f9f8] to-white">
      <div className="w-full max-w-7xl px-4">
        <div className="flex items-center justify-between py-6">
          <button
            onClick={handleBack}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-[#e44141] transition-colors"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Voltar
          </button>
          <div className="flex items-center gap-2">
            <Salad className="h-6 w-6 text-[#c7ccc3]" />
            <span className="text-xl font-bold">NutriAI</span>
          </div>
          <div className="w-20"></div> {/* Spacer for centering */}
        </div>

        <div className="w-full mb-8">
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#afc49e] transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-2 text-xs text-gray-500">
            <span>
              Pergunta {currentQuestionIndex + 1} de {questions.length}
            </span>
            <span>{Math.round(progress)}% completo</span>
          </div>
        </div>

        <div className="flex justify-center w-full">
          {currentQuestion.type === "input" ? (
            <QuizInput
              title={currentQuestion.title}
              measure={currentQuestion.measure}
              min={currentQuestion.min}
              max={currentQuestion.max}
              onChange={handleOptionClick}
              iconName={currentQuestion.iconName}
            />
          ) : (
            <Quiz
              title={currentQuestion.title}
              options={currentQuestion.options}
              onAnswerSelect={handleOptionClick}
              iconName={currentQuestion.iconName}
            />
          )}
        </div>
      </div>
    </div>
  )
}

