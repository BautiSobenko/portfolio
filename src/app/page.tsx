'use client'

import { useState, useEffect } from "react"
import { Hero, Divider, CourseCard, ProjectSectionMobile, About, FeatureSection, ContactSection, ScrollToTopButton } from "@/components/ui"
import { useMediaQuery } from "react-responsive"

const Page = () => {

  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

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
      <ScrollToTopButton />
    </main>
  )
}

export default Page