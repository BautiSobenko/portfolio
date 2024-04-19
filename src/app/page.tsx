'use client'

import { Hero, Divider, CourseCard, ProjectSectionMobile } from "@/components/ui"
import { useMediaQuery } from "react-responsive"

const Page = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <main>
      <Hero />
      <Divider />
      {
        isDesktopOrLaptop
          ? <CourseCard />
          : isTabletOrMobile && <ProjectSectionMobile />
      }
      <Divider />
    </main>
  )
}

export default Page