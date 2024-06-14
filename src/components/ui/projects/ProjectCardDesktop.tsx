import Image from "next/image"

export const ProjectCardDesktop = ({ styles, title, alt, description, src, topic } : { styles: string, title: string, alt: string, description: string, src: string, topic: string }) => {
  return (
    <a className={`overflow-hidden border border-bg-200 bg-bg-100 rounded-2xl grid grid-rows-[15%_50%_35%] ${ styles }`}>
      <div className="flex justify-start lg:justify-center xl:justify-start items-center xl:w-40 xl:ml-5 lg:ml-0 ml-5">
        <h4 className="text-text-300 absolute inline-block bg-accent-100 rounded-[3rem] p-[10px] text-sm text-pretty">{topic}</h4>
      </div>

      <Image 
        priority
        src={src}
        alt={alt}
        width={400}
        height={400}
        className=" h-[55%] xl:h-[80%] self-center w-full"
      />

      <div className="border-t border-bg-200 mt-1 h-full w-full pb-6 text-balance text-center flex flex-col pt-4 gap-2">
        <h1 className="text-xl xl:text-2xl font-bold">{title}</h1>
        <p className="flex pt-4 lg:pt-0 lg:items-center px-20 h-full text-text-200">{description}</p>
      </div>
    </a>     
  )
}
