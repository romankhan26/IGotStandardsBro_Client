import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/Utils/NavBar";
import { Suspense } from "react";
import Loading from "./loading";
import {  Merriweather} from 'next/font/google';
// import {Poppins, Lora } from 'next/font/google';

// const poppins = Poppins({
//   weight: ['400', '600'],
//   subsets: ['latin'],
// });
// const lora = Lora({
//   weight: ['400', '700'],
//   subsets: ['latin'],
// });
const merriweather = Merriweather({
  weight: ['300', '400'],
  subsets: ['latin'],
});




export const metadata: Metadata = {
  title: "I Got Standards Bro - Female Delusion Calculator",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${merriweather.className} antialiased overflow-x-hidden font-merriweather text-base md:text-lg font-normal text-text-dark-charcoal`}
      >
        <NavBar/>
        <div className=" md:px-12  ">
        <Suspense fallback={<Loading />}>
        {children}
</Suspense>
        </div>
      </body>
    </html>
  );
}
