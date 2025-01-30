import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Suspense } from "react";
import Loading from "./loading";
const roboto = Roboto({
weight:"300",
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
        <Suspense fallback={<Loading />}>
        {children}
</Suspense>
        </div>
      </body>
    </html>
  );
}
