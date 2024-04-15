import Image from "next/image"
import { Card } from "./Card"

import { projectsData } from "@/lib/projectsData"

export const CourseCard = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold mb-3">Projects</h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
          Projects through my career
        </p>
      </div>
      <div className="grid h-[70rem] md:grid-cols-5 md:grid-rows-12 gap-4 text-center justify-center sm:grid-cols-2 md:max-w-[64rem] ">
        <div className="p-6 rounded-2xl row-start-1 row-span-4 col-start-1 col-span-3 border border-black">
          <div>

          </div>
          <div>
            
          </div>
          {/* <Image 
            src="#" 
            alt="" 
            width={500}
            height={500}
          /> */}
        </div>
        <div className="p-6 rounded-2xl row-start-1 row-span-4 col-start-4 col-span-2 border border-black"></div>
        <div className="p-6 rounded-2xl row-start-5 row-span-4 col-start-1 col-span-2 border border-black"></div>
        <div className="p-6 rounded-2xl row-start-5 row-span-4 col-start-3 col-span-full border border-black"></div>
        <div className="p-6 rounded-2xl row-start-9 row-span-4 col-start-1 col-span-3 border border-black"></div>
        <div className="p-6 rounded-2xl row-start-9 row-span-4 col-start-4 col-span-full border border-black"></div>
      {/* {projectsData.map((project, index) => (
        <Card
          key={project.name}
          title={project.name} 
          alt={project.alt} 
          description={project.description} 
          src={project.href}
        />
      ))} */}
    </div>
  </section>
)}
