import type { Metadata } from "next";
import "./globals.css";
import { Header, Announcement } from "@/components/ui";
import { Divider } from "@/components/ui/Divider";

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
      <body className={`antialiased bg-bg-100 text-text-100 relative`}>
        <Announcement />
        <Header />
        <Divider />
        <div className="md:px-10 px-2">
          {children}
        </div>
      </body>
    </html>
  );
}
