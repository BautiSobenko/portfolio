import React from 'react'

const ButtonCV = ({ styles, name, href }: { styles:string, name:string, href:string }) => {
  return (
    <a
  className={`flex-grow flex items-center justify-center gap-2 rounded border py-3 ${styles}`}
  href={href}
>
  <span className="text-lg font-[350]"> {name} </span>

  <svg
    className="h-4 w-4 rtl:rotate-180"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
</a>

)}

export default ButtonCV