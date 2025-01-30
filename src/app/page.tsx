import Form from "@/components/Form/Form";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
   <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 max-w-7xl w-full mx-auto my-10 md:my-20">
  {/* <div className="w-full max-w-7xl"> */}
<div className="flex items-center justify-center my-[80px] md:my-[150px] gap-10 mx-auto flex-col text-center">
  <h1 className="lg:text-6xl tracking-wide text-4xl md:text-5xl font-bold text-shadow md:-mt-16 text-[#f4f4f4]">Female Delusion
    Calculator</h1>
    <div className="w-[90%] max-w-[320px] h-auto md:w-[80%]">
  <Image
    src="/assets/home_screen.png"
    className="w-full h-auto"
    width={600}
    height={600}
    alt="home_screen"
  />
</div>

  <div>

<h3 className="text-xl font-semibold	md:text-2xl  mb-2">
  What are the chances to find the man of my dreams?
  </h3>
  <p className="text-base	md:text-lg">
  Live search using surveys conducted by <Link href="/stats" className="text-primary font-bold">US Census Bureau and NCHS</Link>
  </p>
  </div>
  </div> 



   {/*Form getting all the data  */}
<Form/>
   </div>
  );
}
