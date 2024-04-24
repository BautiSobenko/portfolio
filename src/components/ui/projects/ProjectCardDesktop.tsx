import Image from "next/image"

export const ProjectCardDesktop = ({ styles, title, alt, description, src, topic } : { styles: string, title: string, alt: string, description: string, src: string, topic: string }) => {
  return (
    <a className={`overflow-hidden border border-bg-300 bg-grey hover:border-accent-100/40 group rounded-md xl:rounded-[3rem] grid grid-rows-[15%_50%_35%] ${ styles }`}>
      <div className="inline-flex justify-start items-center w-40">
        <h4 className="text-text-300 absolute inline-block bg-accent-100 rounded-[3rem] py-[8px] px-[12px] ml-5 text-sm text-pretty ">{topic}</h4>
      </div>

      <Image 
        priority
        src={src}
        alt={alt}
        width={400}
        height={400}
        className=" h-[75%] xl:h-[85%] self-center w-full pb-1"
      />

      <div className="border-t border-bg-300 group-hover:border-accent-100/40 mt-1 h-full w-full px-3 pb-6 pt-2 text-pretty text-center flex flex-col justify-evenly gap-2">
        <h1 className="text-2xl font-bold text-balance">{title}</h1>
        <p className="text-sm text-balance px-6 text-text-300 leading-6">{description}</p>
      </div>
    </a>     
  )
}
