"use client"

import { motion } from "framer-motion"

export default function Option({ letter, text, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="flex items-center w-full p-4 mb-3 bg-white rounded-xl shadow-sm border border-gray-100 cursor-pointer hover:border-[#c7ccc3] hover:shadow-md transition-all duration-200"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#c7ccc3]/20 text-[#c7ccc3] font-medium mr-4">
        {letter}
      </div>
      <p className="text-gray-700">{text}</p>
    </motion.div>
  )
}

