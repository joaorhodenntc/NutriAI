"use client"
import Option from "./option";

export default function Quiz({title, options, onAnswerSelect }) {
    return (
      <div className="flex flex-col items-center p-5 rounded-xl w-11/12 md:w-4/6 xl:w-1/3 shadow-md bg-gradient-to-br from-[#BCE0A1] to-[#8fbf6a]">
        <h1 className="w-10/12 text-center text-lg font-semibold mb-2">{title}</h1>
        {options.map((option, index) => (
            <Option key={index} letter={option.letter} text={option.text} onClick={() => onAnswerSelect(option.text)}/>
        ))}
      </div>
    );
  }