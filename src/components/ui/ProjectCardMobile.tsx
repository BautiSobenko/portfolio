import Image from "next/image"


export const ProjectCardMobile = ({ title, alt, description, src }: { title: string, alt: string, description: string, src: string }) => {
  
  return (
    <a className="rounded-2xl border border-zinc-700 grid grid-rows-[60%_40%] max-h-[20rem] hover:shadow-sm overflow-hidden items-center"
    href="#">
      <Image 
        src={src} 
        alt={alt} 
        width={150}
        height={150}
        className="row-start-1 row-end-2 h-full w-full rounded-2xl p-2"
      />
      <div className="border-t-2 h-full w-full px-3 text-pretty flex flex-col justify-center gap-2">
        <h1 className="text-md text-wrap text-center">{title}</h1>
        <p className="text-xs text-wrap text-center text-zinc-500">{description}</p>
      </div>
    </a>
  )
}
