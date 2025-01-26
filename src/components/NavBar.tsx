"use client";
import Link from "next/link";
import { useState } from "react";
import { BsTwitterX } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const handleOpen =()=> {
  setOpen(!open);
}
  return (
    <div className="  bg-[#fffff4]">
      <div className=" flex items-center text-[#343434] relative justify-between h-[40px] md:h-[70px] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 max-w-7xl w-full mx-auto">
       <Link href="/"><h2 className="font-serif font-bold md:text-[24px] text-[16px]">
          IGot
          <span className="text-[#4e95ff]">Standards</span>Bro
        </h2></Link>
        <FiMenu
          className="h-[25px]  w-[25px]  cursor-pointer md:hidden"
          onClick={handleOpen}
        />
        {open && (
          <ul className=" justify-center items-center gap-10 flex flex-col md:hidden  font-semibold absolute top-[40px] bg-[#000000d2] w-[100%] left-0 text-white h-screen" onClick={handleOpen} >
            <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link href="/privacy">
              {" "}
              <li>Privacy</li>
            </Link>
           
            <Link href="/stats">
              {" "}
              <li>Stats</li>
            </Link>
            <Link href="/about">
              {" "}
              <li>About</li>
            </Link>
            <Link href="/https://twitter.com/GotStandardsBro">
              {" "}
              <li>
                <BsTwitterX size={24} />
              </li>
            </Link>
          </ul>
        )}
        <ul className=" justify-between items-center gap-10 hidden md:flex font-semibold">
        <Link href="/">
              {" "}
              <li>Home</li>
            </Link>
            <Link href="/privacy">
              {" "}
              <li>Privacy</li>
            </Link>
           
            <Link href="/stats">
              {" "}
              <li>Stats</li>
            </Link>
            <Link href="/about">
              {" "}
              <li>About</li>
            </Link>
            <Link href="/https://twitter.com/GotStandardsBro">
              {" "}
              <li>
                <BsTwitterX size={24} />
              </li>
            </Link>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
