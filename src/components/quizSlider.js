"use client"

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuiz } from "@/context/QuizContext";

export default function QuizSlider({title, min=40, max= 150, onChange, route, measure}) {
    const [value, setValue] = useState(min);
    const router = useRouter();
    const { saveAnswer } = useQuiz();
    

    const handleSubmit = () => {
       saveAnswer(title, measure === "cm" ? (value/100).toFixed(2) + measure : value + measure);
       router.push(route);
    }

    const handleSliderChange = (event) => {
        setValue(event.target.value);
        if(onChange){
            onChange(newValue);
        }
    }
    
    return (
      <div className="flex flex-col items-center p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/3 bg-gradient-to-br from-[#BCE0A1] to-[#8fbf6a]">
        <h1 className="w-10/12 text-center text-lg font-semibold">{title}</h1>
        <input
          className="w-1/2 mt-6"
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={handleSliderChange}
        />
        <p className="mt-6">Selecionado: {measure === "cm" ? (value/100).toFixed(2) : value} {measure}</p>
        <button  className="mt-6 mb-2 px-4 py-2 bg-[#c1d8cd] rounded font-semibold hover:bg-[#acc6ba]" onClick={handleSubmit}>
            Próximo
        </button>
      </div>
    );
  }
