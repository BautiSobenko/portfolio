import Image from "next/image"


export const Card = ({ title, alt, description, src, style }: { title: string, alt: string, description: string, src: string, style: string}) => {
  return (
    <a className="p-6 max-w-lg border border-zinc-700 rounded-2xl hover:shadow-sm hover:shadow-indigo-600 items-center"
    href="#">
      <Image 
        src={src} 
        alt={alt} 
        width={225}
        height={225}
        className="shadow rounded-lg overflow-hidden border md:w-full"
      />
      <div className="mt-8 flex flex-col items-center">
        <div className="text-center">
          <h4 className="font-bold text-xl">{title}</h4>
          <p className="mt-2 text-gray-600">
            {description}
          </p>
        </div>
        <div className="mt-5">
            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
        </div>
      </div>
    </a>
  )
}
