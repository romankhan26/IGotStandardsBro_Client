import { H_One, H_Three } from "@/components/Utils/Typography"
import Link from "next/link"


const Privacy= ()=>{        
    return (
      <div className="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-72 max-w-7xl w-full mx-auto my-10 md:my-20">
        <H_One className=" text-center mb-3 md:mb-6 text-shadow text-primary" text="Privacy Policy"/>
        <div className="bg-secondary shadow-xl  rounded-xl  space-y-4 p-4 md:p-8 pb-8 md:pb-16">
          <p>
          At IGotStandardsBro.com one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by IGotStandardsBro.com and how we use it.
        </p><p>
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us through the twitter link below.
         </p><p>
         This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in IGotStandardsBro.com. This policy is not applicable to any information collected offline or via channels other than this website.
          </p>
          <H_Three text="Consent"  className="font-semibold my-2 "/>
          
          
<p>
By using our website, you hereby consent to our Privacy Policy and agree to its terms.

</p>
<H_Three text="Information we collect" className="font-semibold my-2 "/>
<p>
We do not collect your browsing data nor personal data (i.e. name, email address, phone number). We do not share your data directly with anyone. The services we use may collect and use your data anonymously directly.</p>
<H_Three text="Analytics"  className="font-semibold my-2 "/>
<p>We use Google Analytics to track our website statistics.</p>
<H_Three text="Log Files"  className="font-semibold my-2 "/>
<p>IGotStandardsBro.com follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services&apos; analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users&apos; movement on the website, and gathering demographic information.</p>
<H_Three text="
  Cookies And Web Beacons
"  className="font-semibold my-2 "/>

<p>Like any other website, IGotStandardsBro.com uses &apos;cookies&apos;. These cookies are used to store information including visitors&apos; preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users&apos; experience by customizing our web page content based on visitors&apos; browser type and/or other information.</p>
<H_Three text="Google DoubleClick DART Cookie"  className="font-semibold my-2 "/>
  
<p>Google is one of a third-party vendor on our site. It also uses cookies, known as DART cookies, to serve ads to our site visitors. However, visitors may choose to decline the use of DART cookies by visiting the Google ad and content network Privacy Policy at the following URL - <Link className="text-primary font-bold text-[12px] md:text-[16px]" href="https://policies.google.com/technologies/ads">https://policies.google.com/technologies/ads </Link></p>
<H_Three text="  Our Advertising Partners"  className="font-semibold my-2 "/>

<p>Third-party ad servers or ad networks use technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on IGotStandardsBro.com, which are sent directly to users&apos; browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit.
</p><p>
Note that IGotStandardsBro.com has no access to or control over these cookies that are used by third-party advertisers.</p>

<H_Three text="Third-Party Privacy Policies"  className="font-semibold my-2 "/>
<p>
IGotStandardsBro.com&apos;s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
</p><p>
You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers&apos; respective websites.</p>
<H_Three text="Children&apos;s Information"  className="font-semibold my-2 "/>
<p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
<H_Three text="Ezoic Privacy Policy"  className="font-semibold my-2 "/>
<p>Click here to read the <Link className="text-primary font-bold "  href="https://g.ezoic.net/privacy/igotstandardsbro.com">Ezoic Privacy Policy</Link>.</p>
             </div>
             </div>
    )
  }

export default Privacy