"use client"
import Option from "./option";

export default function Quiz({title, options, onAnswerSelect }) {
    return (
      <div className="flex flex-col items-center bg-[#BCE0A1] text-[#22241a] p-5 rounded-xl w-10/12 md:w-4/6 xl:w-1/3">
        <h1 className="w-10/12 text-center text-lg font-semibold">{title}</h1>
        {options.map((option, index) => (
            <Option key={index} letter={option.letter} text={option.text} onClick={() => onAnswerSelect(option.text)}/>
        ))}
      </div>
    );
  }