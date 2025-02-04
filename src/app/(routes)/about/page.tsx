import { H_One } from "@/components/Utils/Typography"


const About = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64 min-h-screen flex flex-col justify-center items-center max-w-7xl w-full mx-auto my-10 md:my-20">
        <H_One className=" text-center mb-3 md:mb-6  text-shadow   text-primary" text="About"/>
        <div className="bg-secondary shadow-xl space-y-4 rounded-3xl p-4 md:p-8  pb-8 md:pb-16">
            <p >
            How did I come up with the <strong className="font-bold">Female Delusion Calculator idea?</strong>
            </p><p>During my &quot;dating career&quot; as a man living in North America I couldn&apos;t help noticing that women often have unrealistic expectations. They see themselves being passed around by those high quality men they feel entitled for, failing to realize those few men are in high demand. Time passes, options shrink, their standards don&apos;t change and they wonder why they are still single.
         </p><p>
         The stats can prove there&apos;re not enough high quality men for every girl out there. </p><p>
         The <strong>Female Delusion Calculator</strong> is a tool that can help women discern what is realistic from what is highly unlikely. </p><p> Enjoy!  </p>
        </div>
        </div>
  )
}

export default About