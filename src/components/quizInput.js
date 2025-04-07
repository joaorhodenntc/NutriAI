"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

export default function QuizInput({ title, onChange, measure, min, max, iconName }) {
  const [value, setValue] = useState("")
  const [showError, setShowError] = useState(false)

  // Dynamically get the icon component from Lucide
  const IconComponent = iconName ? LucideIcons[iconName] : null

  const handleNextClick = () => {
    if (!value) {
      setShowError(true)
      return
    }

    if (min && Number(value) < min) {
      setShowError(true)
      return
    }

    if (max && Number(value) > max) {
      setShowError(true)
      return
    }

    if (onChange) {
      onChange(value + measure)
    }
    setValue("")
    setShowError(false)
  }

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100">
        <div className="flex items-center justify-center mb-6">
          {IconComponent && (
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[#c7ccc3]/20 text-[#c7ccc3] mr-3">
              <IconComponent className="w-6 h-6" />
            </div>
          )}
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        </div>

        <div className="flex items-center w-full mb-6">
          <input
            className="w-full px-4 py-3 text-center rounded-l-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#c7ccc3] focus:border-transparent"
            placeholder={measure === "cm" ? "Ex: 180" : "Ex: 80"}
            type="number"
            inputMode="numeric"
            min={min || 0}
            max={max}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
              if (showError) setShowError(false)
            }}
          />
          <span className="px-4 py-3 bg-gray-100 rounded-r-lg text-gray-700 font-medium border-y border-r border-gray-200">
            {measure}
          </span>
        </div>

        {showError && (
          <motion.p
            className="text-[#e44141] text-sm mb-4 text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {min && max ? `Por favor, insira um valor entre ${min} e ${max}` : "Por favor, insira um valor válido"}
          </motion.p>
        )}

        <motion.button
          className="w-full py-3 px-6 bg-[#afc49e] hover:bg-[#91a382] text-white font-medium rounded-lg transition-colors duration-200"
          onClick={handleNextClick}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Próxima Pergunta
        </motion.button>
      </div>
    </div>
  )
}

