/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from "next/image"
import { useMediaQuery } from "react-responsive" 

import { GoToButton, DownloadButton, SocialIcons } from "@/components/ui"


const Hero = () => {

  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 1024px)' })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <section className="flex lg:flex-row flex-col mx-auto mb-8 xl:mb-16 text-pretty gap-6 xl:gap-16 xl:my-10">
      <div className="flex-col items-center lg:text-start lg:items-start text-center">
        <h3 className="text-sm text-accent-100 uppercase font-secondary-sohne tracking-[2px] lg:mt-8 my-4">Last-year Software Engineering Student</h3>
        <h1 className="flex flex-col text-5xl md:text-6xl">Hello. {<span className="">I'm Bauti.</span>}</h1>
        <div className="pb-6 mt-3.5 max-w-xl text-lg lg:text-lg text-text-200">
          <div className="flex justify-center pb-2 lg:justify-start">
            <SocialIcons />
          </div>
          <p className="py-2 text-sm md:text-base lg:text-start text-balance text-center">
            Passionate Software Engineer student at "National University of Mar del Plata" with a solid foundation
            in computer science principles and in the whole software life cycle.
          </p>
        </div>
        {
          isTabletOrMobile && (
            <Image 
            priority
            className="pb-4 w-full px-2 md:px-10" 
            src="/hero.svg"
            alt="Illustration of a software engineer coding with his laptop"
            width={500}
            height={500}
            />
          )
        }
        <div className="flex flex-col md:mt-8 lg:mt-0 lg:mr-36 md:gap-7 gap-3 md:flex-row  ">
          <GoToButton name="Contact me" sectionId="contact-section"/>  
        </div>
      </div>
      {
        isDesktopOrLaptop && (
          <Image className="max-h-fit pt-10 lg:size-[420px] xl:w-[525px]" 
          priority
          src="/hero.svg"
          alt="Illustration of a software engineer coding with his laptop"
          width={525}
          height={525}
          />
        )
      }
      
    </section>
  )
}

export default Hero