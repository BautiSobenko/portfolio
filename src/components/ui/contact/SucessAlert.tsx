export default function SucessAlert() {
  
  return (
    <div className="top-0 left-0 fixed rounded-md bg-[#4ade80] w-full p-3">
      <div className="flex items-center justify-center gap-2">
          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="size-6 text-text-100">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <p className="text-sm lg:text-base font-normal text-text-100">Message sent</p>
      </div>
    </div>      
  )
}
