'use client'

import { Hero, Divider, CourseCard, ProjectSectionMobile, About, FeatureSection, ContactSection } from "@/components/ui"
import { useMediaQuery } from "react-responsive"

const Page = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  return (
    <main>
      <Hero />
      <Divider />
      {
        isDesktopOrLaptop
          ? <CourseCard />
          : <ProjectSectionMobile />
      }
      <Divider />
      <About />
      <Divider />
      <FeatureSection />
      <Divider />
      <ContactSection />
    </main>
  )
}

export default Page