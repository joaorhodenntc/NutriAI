"use client"; // Certifique-se de que esta linha está presente

import { useState, useEffect } from "react";
import { useQuiz } from "@/context/QuizContext";
import Image from "next/image";
import { CohereClientV2 } from 'cohere-ai'; // Importação da biblioteca

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
              content: `Com base nessas respostas, faça uma dieta para mim, envie SOMENTE e DIRETAMENTE as refeições: ${JSON.stringify(answers)}`,
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
          <Image src="/assets/loading3.gif" alt="Logo" width={280} height={180} />
          <p className="font-semibold -mt-14">Preparando sua dieta...</p>
        </div>
      )}
      {!isLoading && responseText && (
        <div className="min-h-screen w-full flex flex-col items-center justify-center">
          <Image
            src="/assets/logo-nutriai.png"
            onClick={() => router.push("/")}
            className="mb-10 mt-10 cursor-pointer"
            alt="Logo"
            width={150}
            height={150}
          />
          <div className="flex flex-col items-center mb-4 bg-[#c7ccc3] p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/2">
            <h2 className="font-bold">🥗 Dieta:</h2>
            <pre className="whitespace-pre-wrap text-left font-sans mt-3 pb-2">
              {formatResponseText(responseText.replace(/['"]+/g, ''))}
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}
