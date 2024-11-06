"use client"

import { useState, useEffect } from "react";

export default function QuizInput({title, onChange, measure}) {
  const [value, setValue] = useState("");

    const handleNextClick = () => {
        if (onChange){
          onChange(value + measure);
        }
        setValue("");
    }
    
    return (
      <div className="flex flex-col items-center p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/3 bg-gradient-to-br from-[#BCE0A1] to-[#8fbf6a]">
        <h1 className="w-10/12 text-center text-lg font-semibold">{title}</h1>
        <div className="flex items-center w-1/2 mt-6">
          <input
            className="w-full text-center h-7 rounded-l-lg"
            placeholder={measure == "cm" ? "Ex: 180cm" : "Ex: 80kg"}
            type="number"
            inputMode="numeric"
            min={0}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <span className="px-2 bg-gray-200 rounded-r-lg h-7 flex items-center">{measure}</span>
        </div>
        <button  className="mt-6 mb-2 px-4 py-2 bg-[#c1d8cd] rounded font-semibold hover:bg-[#acc6ba]" onClick={handleNextClick}>
            Próximo
        </button>
      </div>
    );
  }
