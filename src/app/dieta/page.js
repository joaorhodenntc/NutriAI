"use client"; 

import { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import { CohereClientV2 } from 'cohere-ai'; 

export default function QuizFinal() {
  const { answers } = useQuiz();
  const [responseText, setResponseText] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const submit = async () => {
      const cohere = new CohereClientV2({
        token: 'EteMKTdPQNEtHQiG3faUTk7ddmQyLSJCzxRZegtL',
      });

      try {
        const response = await cohere.chat({
          model: 'command-r-plus',
          messages: [
            {
              role: 'user',
              content: `Com base nessas respostas, faça uma dieta, envie SOMENTE e DIRETAMENTE uma opção por refeição com uma simples instrução de como fazer. Abaixo da dieta envie uma justificativa de por que escolheu esta dieta: ${JSON.stringify(answers)}`,
            },
          ],
        });
        setResponseText(response.message.content[0].text);
        console.log("Resposta da API OpenAI:", response.message.content[0].text);
      } catch (error) {
        console.error("Erro ao enviar as respostas para a API:", error);
      } finally {
        setIsLoading(false);
      }
    };

    submit(); 
  }, [answers]);

  const handleExportPDF = async () => {
    const element = document.getElementById("diet-content");
    const html2pdf = (await import("html2pdf.js")).default; 
  
    const options = {
      margin: 1, 
      filename: "dieta2.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    };
  
    html2pdf()
      .set(options)
      .from(element)
      .save("dieta2.pdf")
      .then(() => {
        console.log("PDF gerado com margens com sucesso");
      })
      .catch((error) => {
        console.error("Erro ao gerar PDF:", error);
      });
  };

  const formatResponseText = (text) => {
    const keywords = [
      "Café da Manhã:",
      "Lanche da manhã:",
      "Almoço:",
      "Lanche da tarde:",
      "Pré-treino:",
      "Pós-treino:",
      "Jantar:",
      "Ceia:",
      "Antes de dormir",
      "Justificativa"
    ];

    const escapedKeywords = keywords.map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));

    const regex = new RegExp(`(${escapedKeywords.join("|")})`, "gi");

    return text.split(regex).map((part, index) => {
      return keywords.some((keyword) => keyword.toLowerCase() === part.toLowerCase()) ? (
        <strong key={index}>{part}</strong>
      ) : (
        part
      );
    });
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      {isLoading && (
        <div>
          <Image src="/assets/loading3.gif" alt="Logo" width={280} height={180} />
          <p className="font-semibold -mt-14">Preparando sua dieta...</p>
        </div>
      )}
      {!isLoading && responseText && (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
          <Image
            src="/assets/logo-nutriai.png"
            onClick={() => router.push("/")}
            className="mb-5 mt-10 cursor-pointer sm:w-36"
            alt="Logo"
            width={110}
            height={110}
          />
          <div className="flex flex-col items-center mb-4 bg-[#c7ccc3] p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/2">
            <h2 className="font-bold">🥗 Dieta:</h2>
            <pre id="diet-content" className="whitespace-pre-wrap text-left font-sans mt-3 pb-2">
              {formatResponseText(responseText.replace(/['"]+/g, ''))}
            </pre>
            <button  className="mt-6 mb-2 px-4 py-2 bg-[#e44141cf] text-white rounded font-semibold hover:bg-[#acc6ba]" onClick={handleExportPDF}>
              Exportar PDF
          </button>
          </div>
        </div>
      )}
    </div>
  );
}
