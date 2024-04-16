/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from "next/image"
import { useMediaQuery } from "react-responsive" 

import ButtonCV from "./ButtonCV"

const Hero = () => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

  return (
    <section className="flex md:flex-row flex-col mx-auto mb-8 text-pretty gap-6">
      <div className="flex-col items-center md:text-start text-center">
        <div className="text-md text-indigo-600 uppercase font-semibold tracking-[2px] md:mt-8 my-4">Final-year Software Engineering Student</div>
        <h1 className="text-5xl md:text-5xl font-bold">Hello. I'm Bauti.</h1>
        <div className="subtitle pb-6 mt-3.5 max-w-xl text-md md:text-lg">
          <p className="mt-2 ">
            Passionate Software Engineer student at "National University of Mar del Plata" with a solid foundation
            in computer science principles and in the whole software life cycle.
          </p>
          <p className="mt-2">
            I've had the opportunity to work on a diverse range of projects since my career has started, from Web and App developement to Artificial Intelligence and Machine learning models.
          </p>
          <p className="mt-2">
            I'm always looking for challenging opportunities and new things to learn and grow.
          </p>
        </div>
        {
          isTabletOrMobile && (
            <Image className="max-h-fit pb-4" 
            priority
            src="/hero.svg"
            alt="Illustration of a software engineer coding with his laptop"
            width={500}
            height={500}
            />
          )
        }
        <div className="flex flex-col md:gap-7 gap-3 lg:flex-row md:mr-32">
          <ButtonCV href="/contact" name="Contact me" styles="border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"/>  
          <ButtonCV href="/download" name="Download CV" styles="border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"/>  
        </div>
      </div>
      {
        isDesktopOrLaptop && (
          <Image className="max-h-fit pt-10" 
          priority
          src="/hero.svg"
          alt="Illustration of a software engineer coding with his laptop"
          width={500}
          height={500}
          />
        )
      }
      
    </section>
  )
}

export default Hero