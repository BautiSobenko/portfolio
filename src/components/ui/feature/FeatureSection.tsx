import { CardIcon } from "./FeatureCard"
import { techStackData } from "@/lib/techStackData"

export const FeatureSection = () => {
  return (
    <section className="">
      <div className="text-center py-10">
        <h2 className="text-5xl font-bold mb-3">Tech stack</h2>
        <p className="text-sm md:text-base">
          Technologies i have worked with
        </p>
      </div>

      <ul className="flex flex-wrap justify-center mb-8">
        {techStackData.map( ( tech ) => (
          <CardIcon 
            key={tech.name} 
            {...tech}
          />
        ))}
        
      </ul>

    </section>
  )
}
