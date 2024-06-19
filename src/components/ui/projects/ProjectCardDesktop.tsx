import Image from "next/image"

import { Tags } from "./Tags"

export const ProjectCardDesktop = ({ styles, title, alt, description, src, topic, tags, href } : { styles: string, title: string, alt: string, description: string, src: string, topic: string, tags: Array<string>, href: string }) => {
  return (
    <a 
      className={`overflow-hidden border border-bg-200 bg-bg-100/80 rounded-2xl grid grid-rows-[10%_45%_30%_15%] 2xl:grid-rows-[10%_50%_25%_15%] ${ styles }`}
      href={href}
      target="_blank"
      rel="noopener noreferrer">
      <div className="flex justify-start lg:justify-center xl:justify-start items-center xl:w-40 xl:ml-5 lg:ml-0 ml-5">
        <h4 className="text-text-300 absolute inline-block bg-accent-100 rounded-[3rem] p-[10px] text-sm text-pretty">{topic}</h4>
      </div>

      <Image 
        priority
        src={src}
        alt={alt}
        width={400}
        height={400}
        className=" h-[70%] xl:h-[80%] self-center w-full"
      />

      <div className="border-t border-bg-200 gap-3 text-balance text-center flex flex-col justify-center">
        <h1 className="text-xl xl:text-2xl 2xl:px-20 font-bold">{title}</h1>
        <p className="xl:px-20 text-text-200">{description}</p>
      </div>

      <ul className="flex flex-wrap justify-center items-center text-sm xl:px-20 py-4 gap-3 border-t border-bg-200">
        {
          tags.map((tag, index) => (
            <Tags key={index} name={tag} />
          ))
        }
        
      </ul>
    </a>     
  )
}
