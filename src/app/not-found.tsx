import Link from 'next/link'
import { HiHome } from "react-icons/hi2";
Link
const NotFound = () => {
  return (
    <>
   <div className="flex justify-center text-center items-center flex-col h-[80vh] space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">

    <h1 className='text-6xl md:text-7xl font-bold text-shadow text-primary'>404</h1>
    <p>Not all those who wander are lost—but this page might be.</p>
    <Link href="/"
        
        className="bg-[#ffffff18] shadow-xl text-center  text-lg md:text-xl rounded-xl flex items-center  py-4 md:py-6 w-[80%] font-bold"
      >Go to Home <HiHome/> </Link>
</div></>
)
}

export default NotFound