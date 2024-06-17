import { projectsData } from "@/lib/projectsData"
import { ProjectCardMobile } from "./ProjectCardMobile"

export const ProjectSectionMobile = () => {
  return (
    <section id="project-section" className="mb-10">
      <div className="text-center py-6">
        <h2 className="text-5xl font-bold mb-3">Projects</h2>
        <p className="text-sm md:text-base">
          Projects through my career
        </p>
      </div>
      <div className="flex flex-col gap-6">
          {projectsData.map((project) => (
            <ProjectCardMobile
              key={project.name}
              title={project.name} 
              alt={project.alt} 
              description={project.description} 
              src={project.src}
              topic={project.topic}
              href={project.href}
            />
          ))}
    </div>
  </section>
)}

