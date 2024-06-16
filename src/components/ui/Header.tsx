'use client'

import { HeaderLink } from "@components/ui";

const Header = () => {
  return (
    <header>
      <nav className="flex flex-col lg:gap-2 lg:flex-row justify-between items-center py-4 md:px-2">
        <div className="flex py-3 items-center gap-1 ">
          <a href="/" className="text-2xl tracking-wider">
            Bautista Priano Sobenko
          </a>
        </div>
        <div className="flex gap-10 text-sm md:text-base mb-3 lg:mb-0">
          <HeaderLink name="Projects" sectionId="projects-section" />
          <HeaderLink name="About me" sectionId="about-me-section" />
          <HeaderLink name="Tech stack" sectionId="tech-stack-section" />
        </div>
      </nav>
    </header>
  );
};

export default Header;
