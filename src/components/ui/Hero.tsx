/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from "next/image"
import { useMediaQuery } from "react-responsive" 

import ButtonCV from "./ButtonCV"

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1023px)' })

  return (
    <section className="flex lg:flex-row flex-col mx-auto mb-8 text-pretty gap-6 xl:gap-16">
      <div className="flex-col items-center lg:text-start text-center">
        <div className="text-sm md:text-md text-accent-100 uppercase font-semibold tracking-[2px] lg:mt-8 my-4">Final-year Software Engineering Student</div>
        <h1 className="flex flex-col text-5xl md:text-6xl font-bold">Hello. {<span className="">I'm Bauti.</span>}</h1>
        <div className="pb-6 mt-3.5 max-w-xl text-lg lg:text-lg text-text-200 leading-relaxed">
          <p className="py-2 lg:text-start text-center">
            Passionate Software Engineer student at "National University of Mar del Plata" with a solid foundation
            in computer science principles and in the whole software life cycle.
          </p>
        </div>
        {
          isTabletOrMobile && (
            <Image 
            priority
            className="pb-4" 
            src="/hero.svg"
            alt="Illustration of a software engineer coding with his laptop"
            width={500}
            height={500}
            />
          )
        }
        <div className="flex flex-col md:mt-8 lg:mt-0 md:gap-7 gap-3 md:flex-row  ">
          <ButtonCV href="/contact" name="Contact me" styles="border-accent-100 bg-accent-100 text-white hover:bg-bg-100 hover:text-accent-100 focus:outline-none focus:ring active:text-accent-100"/>  
          <ButtonCV href="/download" name="Download CV" styles="border-accent-100 bg-accent-100 text-white hover:bg-bg-100 hover:text-accent-100 focus:outline-none focus:ring active:text-accent-100"/>  
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