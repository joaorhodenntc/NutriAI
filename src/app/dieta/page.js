"use client"

import { useState, useEffect } from "react"
import { useQuiz } from "@/context/QuizContext"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { CohereClientV2 } from "cohere-ai"
import { ArrowLeft, FileDown, Home, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

export default function QuizFinal() {
  const router = useRouter()
  const { answers } = useQuiz()
  const [responseText, setResponseText] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const submit = async () => {
      const cohere = new CohereClientV2({
        token: process.env.NEXT_PUBLIC_COHERE_API_KEY,
      })

      try {
        const response = await cohere.chat({
          model: "command-r-plus",
          messages: [
            {
              role: "user",
              content: process.env.NEXT_PUBLIC_COHERE_PROMPT.replace("{answers}", JSON.stringify(answers)),
            },
          ],
        })

        const text = response.message.content[0].text
        // Tenta encontrar e extrair apenas a parte JSON da resposta
        const jsonMatch = text.match(/\[\s*\{[\s\S]*?\}\s*\]/)
        if (jsonMatch) {
          try {
            // Valida se o JSON é válido antes de salvar
            JSON.parse(jsonMatch[0])
            setResponseText(jsonMatch[0])
          } catch (error) {
            console.error("JSON inválido na resposta da API:", error)
            setError("Ocorreu um erro ao processar sua dieta. Por favor, tente novamente.")
          }
        } else {
          console.error("Não foi possível encontrar o JSON na resposta")
          setError("Não foi possível gerar sua dieta. Por favor, tente novamente.")
        }
      } catch (error) {
        console.error("Erro ao enviar as respostas para a API:", error)
        setError("Ocorreu um erro ao conectar com nosso serviço. Por favor, tente novamente mais tarde.")
      } finally {
        setIsLoading(false)
      }
    }

    submit()
  }, [answers])

  const formatResponseText = (text) => {
    try {
      const dietData = JSON.parse(text)

      // Separar o resumo dos itens de refeição
      const mealItems = dietData.filter((item) => item.refeicao)
      const resumoItem = dietData.find((item) => item.resumo)

      return (
        <div className="w-full">
          {resumoItem && (
            <div className="mb-8 p-6 bg-[#c7ccc3]/20 rounded-xl">
              <h3 className="text-xl font-semibold mb-3">Resumo da Dieta</h3>
              <p className="text-gray-700">{resumoItem.resumo}</p>
            </div>
          )}

          <div className="space-y-6">
            {mealItems.map((meal, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#c7ccc3]/20 flex items-center justify-center mr-3">
                    {getMealIcon(meal.refeicao)}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800">{meal.refeicao}</h3>
                </div>
                <p className="text-gray-700">{meal.menu}</p>
              </motion.div>
            ))}
          </div>
        </div>
      )
    } catch (error) {
      console.error("Erro ao processar o JSON da dieta:", error)
      return (
        <div className="p-6 bg-red-50 rounded-xl border border-red-100">
          <p className="text-red-600">Erro ao processar sua dieta. Por favor, tente novamente.</p>
        </div>
      )
    }
  }

  const getMealIcon = (mealName) => {
    const mealNameLower = mealName.toLowerCase()

    if (mealNameLower.includes("café") || mealNameLower.includes("manhã")) {
      return "☕"
    } else if (mealNameLower.includes("almoço")) {
      return "🍽️"
    } else if (mealNameLower.includes("lanche")) {
      return "🥪"
    } else if (mealNameLower.includes("jantar")) {
      return "🍲"
    } else if (mealNameLower.includes("ceia")) {
      return "🥛"
    } else {
      return "🥗"
    }
  }

  const handleExportPDF = async () => {
    const element = document.getElementById("diet-content")
    const html2pdf = (await import("html2pdf.js")).default

    const options = {
      margin: 1,
      filename: "minha-dieta-nutriai.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "a4", orientation: "portrait" },
    }

    html2pdf()
      .set(options)
      .from(element)
      .save()
      .catch((error) => {
        console.error("Erro ao gerar PDF:", error)
      })
  }

  const handleRestart = () => {
    router.push("/quiz")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9f8] to-white">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.push("/")}
            className="flex items-center text-sm font-medium text-gray-600 hover:text-[#e44141] transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Voltar para o início
          </button>
          
          <div className="w-24"></div> {/* Spacer for centering */}
        </div>

        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative -mb-12 h-56 w-56">
              <Image src="/assets/loading3.gif" alt="Carregando" className="object-contain" fill/>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Preparando sua dieta personalizada</h2>
            <p className="text-gray-500 max-w-md text-center">
              Estamos analisando suas respostas e criando um plano alimentar ideal para você...
            </p>
          </div>
        ) : error ? (
          <div className="max-w-2xl mx-auto py-12">
            <div className="bg-red-50 p-8 rounded-xl border border-red-100 text-center">
              <p className="text-red-600 mb-6">{error}</p>
              <button
                onClick={handleRestart}
                className="inline-flex items-center px-4 py-2 bg-[#e44141] text-white rounded-lg hover:bg-[#c93535] transition-colors"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Tentar Novamente
              </button>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            <div className="mb-8 text-center">
              <h1 className="text-3xl font-bold mb-3">Seu Plano Alimentar Personalizado</h1>
              <p className="text-gray-500">Baseado nas suas respostas, criamos um plano alimentar ideal para você.</p>
            </div>

            <div id="diet-content" className="mb-10">
              {formatResponseText(responseText)}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExportPDF}
                className="inline-flex items-center justify-center px-6 py-3 bg-[#e44141] text-white rounded-lg hover:bg-[#c93535] transition-colors"
              >
                <FileDown className="w-5 h-5 mr-2" />
                Baixar PDF
              </button>
              <button
                onClick={handleRestart}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-5 h-5 mr-2" />
                Refazer Quiz
              </button>
              <button
                onClick={() => router.push("/")}
                className="inline-flex items-center justify-center px-6 py-3 bg-white border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <Home className="w-5 h-5 mr-2" />
                Página Inicial
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

