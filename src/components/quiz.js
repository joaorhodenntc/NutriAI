"use client"
import Option from "./option"
import { motion } from "framer-motion"
import * as LucideIcons from "lucide-react"

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Quiz({ title, options, onAnswerSelect, iconName }) {
  // Dynamically get the icon component from Lucide
  const IconComponent = iconName ? LucideIcons[iconName] : null

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

        <motion.div className="space-y-3" variants={container} initial="hidden" animate="show">
          {options.map((option, index) => (
            <motion.div key={index} variants={item}>
              <Option letter={option.letter} text={option.text} onClick={() => onAnswerSelect(option.text)} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

