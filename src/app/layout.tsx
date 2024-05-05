import type { Metadata } from "next";
import "./globals.css";
import { Header, Announcement } from "@/components/ui";
import { Divider } from "@/components/ui/Divider";

import { aeonik, sohne } from './utils/fonts'

export const metadata: Metadata = {
  title: "Bautista Sobenko | Portfolio",
  description:
    "Bautista Sobenko is a last-year Software Engineer Student at National Univerisity of Mar del Plata",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${aeonik} ${sohne}`}>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
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
