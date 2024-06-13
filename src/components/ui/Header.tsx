'use client'

import Link from "next/link";
import { links } from "@/lib/data";

const Header = () => {
  return (
    <header >
      <nav className="flex flex-col md:gap-2 md:flex-row justify-between items-center md:py-3 px-2">
        <div className="flex py-3 items-center gap-1 ">
          <Link href="/" className="text-2xl tracking-wider">
            Bautista Priano Sobenko
          </Link>
        </div>
        <div className="flex gap-12 text-sm lg:text-base mb-3 md:mb-0">
          {links.map( (link) => (
            <li className="list-none rounded-lg p-1.5 " key={link.href}>
              <Link className="hover:text-primary-200" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
