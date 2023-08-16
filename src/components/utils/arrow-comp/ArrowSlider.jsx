import React from 'react';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';

export function NextArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute right-0 flex items-center justify-center w-10 h-10 text-xl border rounded-full border-primary -top-20 ${props?.currentSlide >= 2 ? 'bg-primary text-white' : 'text-primary'}`}
    >
      <MdArrowForward />
    </button>
  );
}

export function PrevArrow(props) {
  const { onClick } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`absolute flex items-center justify-center w-10 h-10 text-xl border rounded-full border-primary ${props?.currentSlide <= 0 ? 'bg-primary text-white' : 'text-primary'} -top-20 right-16`}
    >
      <MdArrowBack />
    </button>
  );
}
