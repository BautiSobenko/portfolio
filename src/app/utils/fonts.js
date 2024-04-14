import { Poppins } from "next/font/google";

export const poppinsInit = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '600'],
  display: 'swap',
  variable: '--font-poppins'
});

export const poppins = poppinsInit.variable;