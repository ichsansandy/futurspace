import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

export default function FAQcomponent({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => {
        setIsOpen(!isOpen);
      }}
      className="flex items-center justify-between p-6 bg-white rounded-3xl"
    >
      <div className="max-w-[85%] flex flex-col gap-2.5">
        <p className="font-bold web:text-[26px] leading-8">{question}</p>
        <p className={`${isOpen ? 'scale-100' : 'scale-0 h-0'} web:text-[21px] leading-6 transition-all duration-300`}>
          {answer}
        </p>
      </div>
      <button
        className="rounded-full bg-slate-200 p-2"
        type="button"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </button>
    </div>
  );
}
