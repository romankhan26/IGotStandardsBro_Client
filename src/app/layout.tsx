import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
weight:"400",
subsets:["latin"]
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
        className={`${roboto.className} antialiased overflow-x-hidden`}
      >
        <NavBar/>
        <div className=" md:px-12  ">
        {children}
        </div>
      </body>
    </html>
  );
}
