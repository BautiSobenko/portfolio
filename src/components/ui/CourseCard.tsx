import { Card } from "./Card"

export const CourseCard = () => {
  return (
    <section className="py-6">
    <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center"></div>
        <h2 className="text-5xl font-bold mb-3">Projects</h2>
        <p className="leading-normal text-muted-foreground sm:text-lg sm:leading-7 mb-6">
          Projects through my career
        </p>
    <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
        <Card imgUrl="/aircraft-recognition-ai.jpg" title="Military aircraft recognition" description="Made for the AI subject" />
    </div>
  </section>
)}
