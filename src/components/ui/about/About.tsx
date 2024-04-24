import Image from "next/image"

export const About = () => {
  return (
    <section className="mb-10 py-6 ">
      
      <div className="text-center py-6">
        <h2 className="text-5xl font-bold mb-3">About</h2>
        <p className="mb-6">
          Just a little more about me
        </p>
      </div>

      <div className="flex flex-col h-[36rem] lg:mx-48 rounded-[3rem] bg-grey border border-bg-300 hover:border-primary-100/40 ">
        <Image
          priority
          className="size-36 object-cover self-center rounded-full mt-8 mb-2 border-4 border-bg-100" 
          src="/profile-pic.jpeg"
          alt="Illustration of a software engineer coding with his laptop"
          width={500}
          height={500}
        />

        <h2 className="mx-4 mb-1 font-semibold text-2xl tracking-wider text-center">Bautista Priano Sobenko</h2>

        <hr className="mx-16 border-accent-100"/>
 
        <div className="text-sm xl:text-base h-full p-4 text-center leading-7 text-balance text-text-200">
          <div className="flex px-32 flex-col justify-center space-y-6 h-full rounded-md">
            <p className="">
              Throughout my career, I've had the opportunity to been involved in diverse projects across different industries. <br /> Web and App developement; Computer networks; Database analysis and design; Artificial Intelligence and Machine learning
            </p>
            <p className="">
              My hard skills spans a wide range of technologies, like Java, Python, JavaScript, React, Next.js, Node.js, Express.js. I am well-versed in both relational and non-relational databases, ensuring optimal data management solutions for every project.
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}
