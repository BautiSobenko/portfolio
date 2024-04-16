import Image from "next/image"

import { projectsData } from "@/lib/projectsData"
import { ProjectCardMobile } from "./ProjectCardMobile"

export const ProjectSectionMobile = () => {
  return (
    <section className="py-6">
      <div className="flex flex-col">
        <h2 className="text-5xl font-bold mb-3">Projects</h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
          Projects through my career
        </p>
      </div>
      <div className="flex flex-col gap-6 px-6 justify-center">
          {projectsData.map((project) => (
            <ProjectCardMobile
              key={project.name}
              title={project.name} 
              alt={project.alt} 
              description={project.description} 
              src={project.href}
            />
          ))}
    </div>
  </section>
)}

