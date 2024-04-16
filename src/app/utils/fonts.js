import { Poppins, Satoshi } from "next/font/google";

export const poppinsInit = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '600'],
  display: 'swap',
  variable: '--font-poppins'
});

export const satoshiInit = Satoshi({
  subsets: ["latin"],
  weight: ['300', '600'],
  variable: '--font-satoshi'
});

export const poppins = poppinsInit.variable;