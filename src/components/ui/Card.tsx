import Image from "next/image"


export const Card = ({ imgUrl, title, description }: { imgUrl: string, title: string, description: string}) => {
  return (
    <a className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
      <Image 
        src={imgUrl} 
        alt={title} 
        width={225}
        height={225}
        className="shadow rounded-lg overflow-hidden border md:w-full"
      />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{title}</h4>
        <p className="mt-2 text-gray-600">{description}
        </p>
        <div className="mt-5">
            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">Start Creating</button>
        </div>
    </div>
</a>
  )
}
