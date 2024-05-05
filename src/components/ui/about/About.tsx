/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"

export const About = () => {
  return (
    <section className="mb-10">
      
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold mb-3">About</h2>
          <p className="text-sm md:text-base">
          Just a little more about me
          </p>
      </div>

      <div className="flex flex-col h-[38rem] xl:h-[36rem] lg:mx-24 xl:mx-48 rounded-2xl bg-bg-100 border border-bg-200 py-8">
        <Image
          priority
          src="/profile-pic.jpeg"
          alt="Illustration of a software engineer coding with his laptop"
          width={500}
          height={500}
          className="size-32 object-cover self-center rounded-full mb-6 mt-2" 
        />

        <h2 className="mx-4 mb-1 text-xl md:text-2xl tracking-wider text-center">Bautista Priano Sobenko</h2>

        <hr className="mx-24 border-accent-100"/>
 
        <div className="text-sm lg:text-base h-full p-4 pb-0 text-center leading-7 text-balance text-text-200">
          <div className="flex flex-col md:px-20 lg:px-28 xl:px-44 justify-center space-y-6 h-full">
            <p>
              Throughout my career, I've had the opportunity to been involved in diverse projects across different industries. <br /> Web and App developement; Computer networks; Database analysis and design; Artificial Intelligence and Machine learning
            </p>
            <p>
              My hard skills spans a wide range of technologies, like Java, Python, JavaScript, React, Next.js, Node.js, Express.js. I am well-versed in both relational and non-relational databases, ensuring optimal data management solutions for every project.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}
