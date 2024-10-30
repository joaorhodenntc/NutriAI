"use client"
import { createContext, useContext, useState } from "react";

const QuizContext = createContext();

export function QuizProvider({ children }) {
  const [answers, setAnswers] = useState({});

  const saveAnswer = (quizId, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [quizId]: answer,
    }));
    console.log("Respostas atuais:", { ...answers, [quizId]: answer });
  };

  return (
    <QuizContext.Provider value={{ answers, saveAnswer }}>
      {children}
    </QuizContext.Provider>
  );
}

export const useQuiz = () => useContext(QuizContext);