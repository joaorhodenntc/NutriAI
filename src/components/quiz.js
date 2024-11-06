"use client"
import Option from "./option";
import { ArrowLeftIcon } from '@heroicons/react/24/solid';

export default function Quiz({title, options, onAnswerSelect, onBackClick}) {
    return (
      <div className="flex flex-col items-start p-5 rounded-xl w-11/12 md:w-4/6 xl:w-1/3 shadow-md bg-gradient-to-br from-[#BCE0A1] to-[#8fbf6a]">
        <button onClick={onBackClick}>
          <ArrowLeftIcon className="h-5 w-5" />
        </button>
        <div className="flex flex-col items-center w-full">
          <h1 className="w-10/12 text-center text-lg font-semibold mb-2">{title}</h1>
          {options.map((option, index) => (
              <Option key={index} letter={option.letter} text={option.text} onClick={() => onAnswerSelect(option.text)}/>
          ))}
        </div>
      </div>
    );
  }