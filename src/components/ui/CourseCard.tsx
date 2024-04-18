import Image from "next/image"

import { projectsData } from "@/lib/projectsData"
import { ProjectCardDesktop } from "."

export const CourseCard = () => {
  return (
    <section className="py-6 m-0">
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold mb-3">Projects</h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
          Projects through my career
        </p>
      </div>
      <div className="grid *:h-[40rem] grid-cols-5 grid-rows-12 gap-3 text-center justify-center ">
      
        <ProjectCardDesktop
          styles="row-start-1 row-span-4 col-start-1 col-span-3 "
          title={projectsData[0].name}
          alt={projectsData[0].alt}
          description={projectsData[0].description}
          src={projectsData[0].href}
          topic={projectsData[0].topic}
        />
        
        <ProjectCardDesktop
          styles="row-span-4 col-start-4 col-span-2"
          title={projectsData[1].name}
          alt={projectsData[1].alt}
          description={projectsData[1].description}
          src={projectsData[1].href}
          topic={projectsData[1].topic}
        />

        {/* Card 3 info= row-start-5 row-span-4 col-start-1 col-span-2 */}

        <ProjectCardDesktop
          styles="row-start-5 row-span-4 col-start-1 col-span-2"
          title={projectsData[3].name}
          alt={projectsData[3].alt}
          description={projectsData[3].description}
          src={projectsData[3].href}
          topic={projectsData[3].topic}
        />

        {/* Card 4 info= row-start-5 row-span-4 col-start-3 col-span-full */}
        
        <ProjectCardDesktop
          styles="row-start-5 row-span-4 col-start-3 col-span-full"
          title={projectsData[2].name}
          alt={projectsData[2].alt}
          description={projectsData[2].description}
          src={projectsData[2].href}
          topic={projectsData[2].topic}
        />

        {/* Card 5 info= row-start-9 row-span-4 col-start-1 col-span-3 */}

        {/* <ProjectCardDesktop
          styles="row-start-9 row-span-4 col-start-1 col-span-3"
          title={projectsData[4].name}
          alt={projectsData[4].alt}
          description={projectsData[4].description}
          src={projectsData[4].href}
        /> */}
    </div>
  </section>
)}
