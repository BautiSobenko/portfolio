import type { Metadata } from "next";
import "./globals.css";

import { Header, Announcement, Divider } from "@/components/ui";
import { aeonik, sohne } from './utils/fonts'

export const metadata: Metadata = {
  title: "Bautista Sobenko | Portfolio",
  description: "Bautista Sobenko is a last-year Software Engineer Student at National Univerisity of Mar del Plata",
  applicationName: "Bautista Priano Sobenko Portfolio",
  authors: [{name: "Bautista Priano Sobenko"}],
  keywords: ["Bautista", "Priano", "Sobenko", "Portfolio", "Software Engineer", "Student", "National University of Mar del Plata"],
  icons: "/web-icon.svg",
};  

export default function RootLayout({children} : {children: React.ReactNode }) {
  return (
    <html lang="en" className={`${aeonik} ${sohne}`}>
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={`antialiased bg-bg-black text-text-100`}>
        <Announcement />
        <Header />
        <Divider />
        <div className="xl:px-10 px-2">
          {children}
        </div>
      </body>
    </html>
  );
}
