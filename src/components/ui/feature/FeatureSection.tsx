import { CardIcon } from "./FeatureCard"
import { techStackData } from "@/lib/techStackData"

export const FeatureSection = () => {
  return (
    <section>
      <div className="text-center py-6">
        <h2 className="text-5xl font-bold mb-3">Tech stack</h2>
        <p>
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
