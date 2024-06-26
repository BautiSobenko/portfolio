import Image from "next/image"

import { projectsData } from "@/lib/projectsData"
import { ProjectCardDesktop } from ".."

export const CourseCard = () => {
  return (
    <section id="projects-section" className="mb-10">
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold mb-3">Projects</h2>
        <p className="flex flex-col">
          Projects through my career
          <span className="text-text-300/50">
            (More in my github profile)
          </span>
        </p>
      </div>
      <div className="grid *:h-[42rem] grid-cols-5 grid-rows-8 gap-6 justify-center ">
      
        <ProjectCardDesktop
          styles="row-start-1 row-span-4 col-start-1 col-span-3"
          title={projectsData[0].name}
          alt={projectsData[0].alt}
          description={projectsData[0].description}
          src={projectsData[0].src}
          topic={projectsData[0].topic}
          tags={projectsData[0].tags}
          href={projectsData[0].href} 
        />
        
        <ProjectCardDesktop
          styles="row-span-4 col-start-4 col-span-2"
          title={projectsData[1].name}
          alt={projectsData[1].alt}
          description={projectsData[1].description}
          src={projectsData[1].src}
          topic={projectsData[1].topic}
          tags={projectsData[1].tags}
          href={projectsData[1].href}
        />

        <ProjectCardDesktop
          styles="row-start-5 row-span-4 col-start-1 col-span-2"
          title={projectsData[3].name}
          alt={projectsData[3].alt}
          description={projectsData[3].description}
          src={projectsData[3].src}
          topic={projectsData[3].topic}
          tags={projectsData[3].tags}
          href={projectsData[3].href}
        />
        
        <ProjectCardDesktop
          styles="row-start-5 row-span-4 col-start-3 col-span-full"
          title={projectsData[2].name}
          alt={projectsData[2].alt}
          description={projectsData[2].description}
          src={projectsData[2].src}
          topic={projectsData[2].topic}
          tags={projectsData[2].tags}
          href={projectsData[2].href}
        />
    </div>
  </section>
)}
