import Image from "next/image"


export const ProjectCardMobile = ({ title, alt, description, src, topic }: { title: string, alt: string, description: string, src: string, topic: string }) => {
  
  return (
    <a className="border border-bg-100 bg-bg-100/80 rounded-lg grid grid-rows-[15%_50%_35%] md:h-[35rem] overflow-hidden items-center"
    href="#">
      <div className="flex justify-center items-center mx-2 my-4 md:my-2">
        <h4 className="bg-accent-100 rounded-full py-2 px-2 text-center text-balance text-sm md:text-base tracking-wider">{topic}</h4>
      </div>

      <Image 
        priority
        src={src} 
        alt={alt} 
        width={150}
        height={150}
        className="h-[85%] w-full pb-1"
      />

      <div className="border-t border-bg-200 h-full my-6 md:my-0 w-full px-3 text-pretty flex flex-col justify-center gap-2">
        <h1 className="text-lg md:text-2xl font-bold text-balance text-center">{title}</h1>
        <p className="tracking-wider text-sm md:text-sm md:text-md text-balance text-center px-6 text-text-200 md:leading-6">{description}</p>
      </div>
    </a>
  )
}
