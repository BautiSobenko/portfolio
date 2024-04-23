import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppinsInit = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '600'],
  display: 'swap',
  variable: '--font-poppins'
});

const aeonicInit = localFont({
  src: [
    {
      path: '../../../public/fonts/aeonik/aeonikprotrial-regular-webfont.woff2',
      weight: '400'
    },
    {
      path: '../../../public/fonts/aeonik/aeonikprotrial-light-webfont.woff2',
      weight: '300'
    },
    {
      path: '../../../public/fonts/aeonik/aeonikprotrial-bold-webfont.woff2',
      weight: '700'
    }
  ],
  variable: '--font-aeonik'
});

const sohneInit = localFont({
  src: [
    {
      path: '../../../public/fonts/sohne/testsohne-buch-webfont.woff2',
      weight: '400'
    },
    {
      path: '../../../public/fonts/sohne/testsohne-leicht-webfont.woff2',
      weight: '300'
    }
  ],
  variable: '--font-sohne'
});

export const poppins = poppinsInit.variable;
export const aeonik = aeonicInit.variable;
export const sohne = sohneInit.variable;
