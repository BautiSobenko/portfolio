'use client'

import { useState } from "react";

const Announcement = () => {

  const [index, setIndex] = useState(0)
  
  const phrases = [
    "Welcome to my portfolio! Thank you for visiting 👋",
    "Passionate about engineering and learning new things📚"
  ]

  const previous = () => {
    if( index > 0 ) {
      setIndex(index - 1)
    } else {
      setIndex(phrases.length - 1)
    }
  }

  const forward = () => {
    if( index < phrases.length - 1 ) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  return (
    <div className={`rounded-b-xl w-full flex flex-row justify-between items-center gap-4 font-medium bg-accent-100 px-4 py-3 text-text-100 text-center`} >
      <button
        onClick={previous}
        className="font-bold hover:text-accent-200 sm:block sm:rounded"
        aria-label="Previous slide"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:h-5 md:w-5 h-7 w-8 rtl:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>
      <p className="text-sm select-none">
        {phrases[index]}
      </p>
    <button
      onClick={forward}
      className="font-bold hover:text-accent-200 sm:block sm:rounded"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="md:h-5 md:w-5 h-7 w-8 rtl:rotate-180"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
          clipRule="evenodd"
        />
      </svg>
    </button>      
    </div>
  );
};



export default Announcement;
