'use client'

import Link from "next/link";
import { links } from "@/lib/data";

export const Header = () => {

  return (
    <header >
      <nav className=" flex flex-col md:gap-2 md:flex-row justify-between items-center md:py-2 px-2">
        <div className="flex py-3 items-center gap-1 ">
          <Link href="/" className="text-2xl font-semibold tracking-widest">
            Bautista Sobenko
          </Link>
        </div>
        <div className="flex gap-12 text-lg text-zinc-800 mb-3 md:mb-0">
          {links.map( (link) => (
            <li className="list-none  rounded-lg p-1.5 " key={link.href}>
              <Link className="hover:text-indigo-600" href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
          
        </div>
      </nav>
    </header>
  );
};
