import Image from "next/image"


export const ProjectCardMobile = ({ title, alt, description, src, topic }: { title: string, alt: string, description: string, src: string, topic: string }) => {
  
  return (
    <a className="border border-accent-100/40 bg-bg-200/40 rounded-xl grid grid-rows-[15%_50%_35%] overflow-hidden items-center"
    href="#">
      <div className="inline-flex justify-start items-center w-40">
        <h4 className="absolute inline-block bg-accent-100 rounded-full py-[8px] px-[12px] ml-5 text-xs text-pretty">{topic}</h4>
      </div>

      <Image 
        priority
        src={src} 
        alt={alt} 
        width={150}
        height={150}
        className="h-[85%] w-full pb-1 mt-6"
      />

      <div className="border-t border-accent-100/40 h-full md:h-[60%] md:pt-6 w-full px-3 text-pretty flex flex-col justify-center gap-2">
        <h1 className="text-md md:text-2xl font-bold text-balance text-center">{title}</h1>
        <p className="text-xs md:text-sm md:text-md text-balance text-center px-6 text-text-200 md:leading-6">{description}</p>
      </div>
    </a>
  )
}
