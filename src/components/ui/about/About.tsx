import Image from "next/image"

export const About = () => {
  return (
    <section className="mb-10 py-6">
      
      <div>
        <h2 className="text-5xl font-bold mb-3">About</h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
          Just a little more about me
        </p>
      </div>

      <div className="flex flex-col h-[42rem] lg:mx-48 xl:mx-60 bg-bg-200/40 border border-bg-300 ">
        <Image
          priority
          className="size-44 object-cover self-center rounded-full my-8 border-4 border-bg-100" 
          src="/profile-pic.jpeg"
          alt="Illustration of a software engineer coding with his laptop"
          width={500}
          height={500}
        />

        <h2 className="mx-4 font-semibold text-xl tracking-widest text-center">Bautista Priano Sobenko</h2>

        <hr className="mx-4 border border-bg-300"/>
 
        <div className="text-sm xl:text-base h-full p-4 text-center leading-7 text-balance text-text-200">
          <div className="flex px-10 flex-col justify-center space-y-6 h-full rounded-md">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error quibusdam, maxime dolorem, excepturi veritatis, quisquam tenetur voluptatibus aliquid et laborum exercitationem facere voluptatem mollitia voluptas possimus perspiciatis. Magnam, ea?
            </p>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque error quibusdam, maxime dolorem, excepturi veritatis, quisquam tenetur voluptatibus aliquid et laborum exercitationem facere voluptatem mollitia voluptas possimus perspiciatis. Magnam, ea?
            </p>
          </div>
        </div>

      </div>

    </section>
  )
}
