import Image from "next/image"

export const CardIcon = ( { name, src, alt } : { name: string, src: string, alt: string } ) => {
  return (
    <li className="list-none flex-[0_0_40%] md:flex-[0_0_20%] bg-bg-100 rounded-lg p-6 md:p-2 xl:h-56 m-2 flex flex-col justify-center items-center">
      
      <Image 
        priority
        src={src}
        alt={alt}
        width={200}
        height={200}
        className=" h-[42%] self-center w-full"
      />

      <hr className="my-4 px-8 border-bg-300"/>

      <h2 className="font-light tracking-wider text-text-200 xl:text-lg">{name}</h2>  

    </li>
  )
}
