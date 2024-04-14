/* eslint-disable react/no-unescaped-entities */

import Image from "next/image"
import heroImage from "../../../public/hero.svg"
import ButtonCV from "./ButtonCV"

const Hero = () => {
  return (
    <section className="border-y border-y-indigo-600">
      <div className="container gap-20 flex flex-col text-center items-center lg:flex-row lg:text-start mx-auto py-4 text-pretty px-10">
        <div className="py-4">
          <div className="text-sm text-secondary uppercase font-semibold  tracking-[2px] mb-4">Final-year Software Engineering Student</div>
          <h1 className="text-5xl font-bold">Hi, I'm Bauti.</h1>
          <div className="subtitle mt-3.5 max-w-xl">
            <p className="mt-2">
              Full-Stack Web Developer going deeply and working with <span className="italic">MERN Stack</span>. 
            </p>
            <p className="mt-2">
              Also i had worked in projects related to App Developement and Artificial Intelligence  
              using <span className="italic">Java</span>, <span className="italic">C</span> and <span className="italic">Python</span>.
            </p>
            <p className="mt-2">
              I'm always looking for challenging opportunities and new things to learn and grow.
            </p>
          </div>
          <div className="flex flex-col gap-7 lg:flex-row">
            <ButtonCV href="/contact" name="Contact me" styles="border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"/>  
            <ButtonCV href="/download" name="Download CV" styles="border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"/>  
          </div>
        </div>
        <Image className="max-h-fit  mt-6" 
          priority
          src={heroImage}
          alt="Illustration of a software engineer coding with his laptop"
          width={500}
          height={500}
        />
      </div>
    </section>
  )
}

export default Hero