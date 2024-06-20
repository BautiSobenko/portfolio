import Image from "next/image"


export const ProjectCardMobile = ({ title, alt, description, src, topic, href }: { title: string, alt: string, description: string, src: string, topic: string, href: string }) => {
  
  return (
    <a 
      className="border border-bg-200 bg-bg-100 rounded-lg grid grid-rows-[10%_50%_40%] md:h-[38rem] overflow-hidden items-center"
      href={href}
      target="_blank"
      rel="noopener noreferrer">
        <div className="flex justify-center h-full pb-1 items-end">
          <h4 className="bg-accent-100 rounded-full py-2 px-3 text-center text-balance text-sm md:text-base tracking-wider">{topic}</h4>
        </div>

        <Image 
          priority
          src={src} 
          alt={alt} 
          width={150}
          height={150}
          className="h-[75%] md:h-[85%] w-full mt-6"
        />

        <div className="border-t border-bg-200 h-full my-6 md:my-8 lg:my-0 w-full px-3 text-balance flex flex-col justify-center gap-5">
          <h1 className="text-lg md:text-2xl font-bold text-balance text-center">{title}</h1>
          <p className="tracking-wider text-sm md:text-base text-balance text-center px-6 text-text-200 md:leading-6">{description}</p>
        </div>
    </a>
  )
}
