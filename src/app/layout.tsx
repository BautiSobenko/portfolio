import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className={`antialiased bg-gray-50 text-gray-950 relative`}>
        <div className="bg-[#f9b4b5] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-35rem] lg:left-[-28rem] xl:left[-15rem] 2xl:left[-5rem]"></div>
      </body>
    </html>
  );
}
