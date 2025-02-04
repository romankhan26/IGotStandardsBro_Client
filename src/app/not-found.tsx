import { H_Five, H_One } from '@/components/Utils/Typography';
import Link from 'next/link'
import { HiHome } from "react-icons/hi2";
const NotFound = () => {
  return (
    <>
   <div className="flex justify-center text-center items-center flex-col h-[80vh] space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">

    <H_One className=' font-bold text-shadow text-primary' text='404'/>
    <H_Five text="Not all those who wander are lost—but this page might be."/>
    <br />
    <Link href="/"
    className="hover:bg-transparent border-primary border-2 bg-primary text-white transition-all active:scale-95 active:bg-primary active:text-white hover:text-primary duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-l-full rounded-r-full p-3 md:p-4 w-full font-bold flex justify-center items-center gap-4 max-w-[700px]"    >Go to Home <HiHome className='text-xl md:text-2xl'/> </Link>
</div></>
)
}

export default NotFound