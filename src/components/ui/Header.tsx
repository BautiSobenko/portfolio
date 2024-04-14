'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { links } from "@/lib/data";

export const Header = () => {

  const path = usePathname();

  return (
    <header >
      <nav className=" flex flex-col gap-3 md:gap-2 md:flex-row justify-between items-center py-4 px-2">
        <div className="flex py-3 items-center gap-1 ">
          <Link href="/" className="text-2xl font-semibold tracking-widest ">
            Bautista Sobenko
          </Link>
        </div>
        <div className="flex gap-12 text-md text-zinc-800">
          {links.map( (link) => (
            <li className="list-none border-solid border-2 lg:border-0 border-zinc-900 hover:border-indigo-600 rounded-lg p-1.5 " key={link.href}>
              <Link href={link.href}>
                {link.name}
              </Link>
            </li>
          ))}
        </div>
      </nav>
    </header>
  );
};
