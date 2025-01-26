/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export const About = () => {
  return (
    <section id="about-me-section" className="mb-10">
      
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold mb-3">About</h2>
          <p className="text-sm md:text-base">
          Just a little more about me
          </p>
      </div>

      <div className="flex flex-col h-[34rem] md:h-[38rem] xl:h-[36rem] lg:mx-24 xl:mx-52 2xl:mx-72 rounded-2xl bg-bg-100/80 py-8 border border-bg-200">
        <Image
          priority
          src="/portfolio/profile-pic.jpeg"
          alt="Illustration of a software engineer coding with his laptop"
          width={500}
          height={500}
          className="size-32 object-cover self-center rounded-full mb-6 mt-2" 
        />

        <h2 className="mx-4 mb-1 text-xl md:text-2xl tracking-wider text-center">Bautista Priano Sobenko</h2>

        <hr className="mx-24 border-accent-100"/>
 
        <div className="text-sm md:text-base h-full p-4 pb-0 text-center leading-7 text-balance text-text-200">
          <div className="flex flex-col md:px-20 lg:px-28 xl:px-44 justify-center space-y-6 h-full">
            <p>
            I am currently working as Software Engineer in "Atlantis" Innovation Center, analyzing, designing and developing a management system.
            Web solution designed to centralize all relevant information, solve data dispersion issues and facilitate a detailed traceability of the life cycle of each incubated startup.             
            </p>
            <p>
            Throughout my career, i've had the opportunity to been involved in projects across differents areas of computer science like: <br /> Web and App developement; Computer networks; Database analysis and design; Artificial Intelligence and Machine learning.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}
