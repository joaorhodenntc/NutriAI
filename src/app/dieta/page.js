"use client"
import { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import { submitQuizAnswersToOpenAI } from "@/services/quizApi";
import Image from "next/image";
import html2pdf from "html2pdf.js";

export default function QuizFinal() {
  const { answers } = useQuiz();
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    submit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function submit() {
    try {
      const response = await submitQuizAnswersToOpenAI(answers);
      if(response) {
        setIsLoading(false);
      }
      setResponseText(response);
      console.log("Resposta da API OpenAI:", response);
    } catch (error) {
      console.error("Erro ao submeter respostas:", error);
    }
  }

  const handleExportPDF = () => {
    const element = document.getElementById("diet-content"); // elemento a ser exportado
    html2pdf().set({
      margin: 1,
      filename: "dieta2.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    }).from(element).save();
  };

  const formatResponseText = (text) => {
    const keywords = [
      "Café da manhã:",
      "Lanche da manhã:",
      "Almoço:",
      "Lanche da tarde:",
      "Pré-treino:",
      "Pós-treino:",
      "Jantar:",
      "Ceia:",
      "Antes de dormir",
    ];

    const escapedKeywords = keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    const regex = new RegExp(`(${escapedKeywords.join("|")})`, "g");

    return text.split(regex).map((part, index) => {
      return keywords.includes(part) ? <strong key={index}>{part}</strong> : part;
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      
      {isLoading && (
        <div>
          <Image src="/assets/loading3.gif" alt="Logo" width={280} height={180}/>
          <p className="font-semibold -mt-14">Preparando sua dieta...</p>
        </div>
        
      )}
      {responseText && (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
          <Image src="/assets/logo-nutriai.png" onClick={() => router.push("/")} className="mb-10 mt-10 cursor-pointer" alt="Logo" width={150} height={150} />
          <div className="flex flex-col items-center mb-4 bg-[#c7ccc3] p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/2">
            <h2 className="font-bold">🥗 Dieta:</h2>
            <pre id="diet-content"className="whitespace-pre-wrap text-left font-sans mt-3 pb-2">{formatResponseText(responseText.replace(/['"]+/g, ''))}</pre>
            <button  className="mt-6 mb-2 px-4 py-2 bg-[#e44141cf] text-white rounded font-semibold hover:bg-[#acc6ba]" onClick={handleExportPDF}>
              Exportar PDF
          </button>
          </div>
        </div>
      )}
    </div>
  );
}