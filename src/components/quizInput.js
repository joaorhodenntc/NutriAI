"use client"
import { useState } from "react";
import { FaArrowLeft } from 'react-icons/fa'; 

export default function QuizInput({title, onChange, measure, onBackClick}) {
  const [value, setValue] = useState("");
  const [showError, setShowError] = useState(false);

    const handleNextClick = () => {
        if (!value) {
          setShowError(true);
        }
        if(value){
          if (onChange){
            onChange(value + measure);
          }
          setValue("");
          setShowError(false);
        }
        
    }
    
    return (
      <div className="flex flex-col items-start p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/3 bg-gradient-to-br from-[#BCE0A1] to-[#8fbf6a]">
        <button onClick={onBackClick}>
          <FaArrowLeft size={20}/>
        </button>
        <div className="flex flex-col items-center w-full">
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
            <span className="px-2 bg-gray-200 rounded-r-lg h-7 flex items-center font-semibold">{measure}</span>
          </div>
          {showError && <span className="mt-4 font-semibold text-red-700">Insira um valor válido</span>}
          <button  className="mt-5 mb-2 px-4 py-2 bg-gray-200 rounded font-semibold sm:hover:bg-[#acc6ba]" onClick={handleNextClick}>
              Próximo
          </button>
        </div>
      </div>
    );
  }
