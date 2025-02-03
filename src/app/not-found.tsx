import { H_One } from '@/components/Utils/Typography';
import Link from 'next/link'
import { HiHome } from "react-icons/hi2";
const NotFound = () => {
  return (
    <>
   <div className="flex justify-center text-center items-center flex-col h-[80vh] space-y-4 text-base md:text-lg rounded-xl p-4 md:p-8 pb-8 md:pb-16">

    <H_One className=' font-bold text-shadow text-primary' text='404'/>
    <p>Not all those who wander are lost—but this page might be.</p>
    <Link href="/"
        
        className="hover:bg-transparent border-primary-soft-pink hover:border-2 bg-primary-soft-pink text-white transition-all active:scale-95 active:bg-primary-soft-pink active:text-white hover:text-primary-soft-pink duration-300 shadow-xl space-y-4 text-xl md:text-2xl rounded-xl p-4 md:p-8 w-full font-bold
            text-center justify-center gap-2   flex items-center  py-4 md:py-6"
      >Go to Home <HiHome className='text-xl md:text-2xl'/> </Link>
</div></>
)
}

export default NotFound