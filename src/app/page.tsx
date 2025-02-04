import { H_Five, H_One } from "@/components/Utils/Typography";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <div className="px-4 sm:px-8 md:px-16 lg:px-32  xl:px-64 max-w-7xl w-full mx-auto min-h-screen flex justify-center items-center">
  {/* <div className="w-full max-w-7xl"> */}
<div className="md:flex items-center justify-center text-center md:text-left  my-[40px] md:my-[70px]  gap-10 mx-auto ">

  <div className="  sm:px-32 md:px-0">
  <H_One className=" text-shadow " text="Female  Delusion
  Calculator"/>
  <H_Five className="text-xl font-semibold 	md:text-2xl  mb-2" text="
  What are the chances to find the man of my dreams?
  "/>
  <p className="text-base	md:text-lg leading-0 -my-2">
  Live search using surveys conducted by <Link href="/stats" className="text-primary font-bold">US Census Bureau and NCHS</Link>
  </p>
  <br />
  <Link href="/form" className="text-sm md:text-base w-[90%] sm:w-[80vh] mx-auto  block text-center md:w-[300px] hover:bg-transparent border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl p-4   md:-ml-2  md:-mt-2 rounded-l-full rounded-r-full font-bold"
        >Calculate Your Delusion Score</Link>
  </div>
  <br />
  <br />
    <div className="  md:w-[100%] max-w-[350px] w-[300px] h-[400px]  md:block hidden shrink-0">
    <Image
    src="/assets/image_homepage (1).png"
    className="w-full h-[400px] shrink-0"
    width={600}
    height={600}
    priority 
    alt="home_screen"
  />
 
</div>

  <div>


  </div>
  </div> 



   
   </div>
  );
}
