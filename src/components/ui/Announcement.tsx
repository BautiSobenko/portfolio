'use client'

import { useState, useEffect } from "react";

const Announcement = () => {

  const [currentAnnouncement, setCurrentAnnouncement] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      forward();
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  const announcements = [
    "Welcome to my portfolio! Thank you for visiting! 👋",
    "Contact me for any inquiries 📧",
    "Portfolio developed with Next.js and Tailwind CSS 👨🏻‍💻",
    "Check out my resume 📚",
    "New projects added to my portfolio. Take a look at my latest work! ☑️"
  ]

  const previous = () => {
    setCurrentAnnouncement( prev => prev === 0 ? announcements.length - 1 : prev - 1 );
  }
  const forward = () => {
    setCurrentAnnouncement( prev => (prev + 1) % announcements.length);
  }

  return (
    <div className="rounded-b-xl w-full flex justify-between items-center gap-4 bg-accent-100 px-4 py-3 text-text-100 text-center" >
      <button
        onClick={previous}
        className="hover:text-bg-black rounded"
        aria-label="Previous slide"
      >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 lg:size-7 rtl:rotate-180"
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
      <p className="text-xs md:text-sm text-balance select-none">
        {announcements[currentAnnouncement]}
      </p>
    <button
      onClick={forward}
      className="hover:text-bg-black"
      aria-label="Next slide"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="size-5 lg:size-7  rtl:rotate-180"
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
