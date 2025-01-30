const Stats = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-44 xl:px-72 max-w-7xl w-full mx-auto my-10 md:my-20">
      <h1 className=" text-center mb-3 md:mb-6 text-4xl md:text-5xl font-bold text-shadow   text-primary">
        Stats
      </h1>
      {/* section 1  data coming from  */}
      <h2 className="text-3xl font-bold	md:text-4xl text-center mb-2 md:mb-4 ">
        Where is the data coming from?
      </h2>
      <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base	md:text-lg rounded-xl p-4 md:p-8  pb-8 md:pb-16">
        <p>
        The <strong>Female Delusion Calculator</strong> processes statistical data from two sources.
          
        </p>
        <p>
        Income and marital status information is derived from the <strong>2023 Annual Social and Economic Supplement (ASEC) of the Current Population Survey (CPS)</strong> conducted by the <strong>Census Bureau</strong> of United States.
        </p>
        <p>
        Height and body mass index is derived from the <strong>2017-2018 National Health and Nutrition Examination Survey (NHANES)</strong> conducted by the <strong>National Center for Health Statistics (NCHS)</strong>. The 2017-2018 data was used instead of the most recent one due to suspension of survey operations in March 2020.
        </p>
       
      </div>
      {/* section 2 excluded married */}
       <h2 className="text-3xl font-bold	md:text-4xl text-center my-2 md:my-4 mt-4 md:mt-8">
       Exclude Married
      </h2>
      <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base	md:text-lg rounded-xl p-4 md:p-8  pb-8 md:pb-16">
        <p>
        What is the <strong>exclude married</strong> option about?
          
        </p>
        <p>
        The marital status options in the ASEC survey are: </p>
        <ol className="list-decimal ml-4 md:ml-8">
<li>Married, spouse present</li>
<li>Married, spouse absent</li>
<li>Separated</li>
<li>Divorced</li>
<li>Widowed</li>
<li>Never married/single</li>
<li>Widowed or Divorced</li>
        </ol>
        <p>
        By ticking the <strong>exclude married </strong>option you are filtering out the first two options from the sample data.   </p>
       
      </div>
      {/* section 3 Race */}
      <h2 className="text-3xl font-bold	md:text-4xl text-center my-2 md:my-4 mt-4 md:mt-8">
       Race
      </h2>
      <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base	md:text-lg rounded-xl p-4 md:p-8  pb-8 md:pb-16">
        <p>
        The ASEC survey allows 28 different race options to chose from, including combinations of two or more races, for example White-Black-American Indian.
          
        </p>
        <p>In order to simplify the user experience, the calculator shows you only 4 options:</p>
        <ol className="list-decimal ml-4 md:ml-8">
        <li>All races and combinations
        </li>
        <li>Non-hispanic white
        </li>
        <li>Pure black
        </li>
        <li>Pure asian
        </li>
        </ol>
       
       
      </div>
      <h2 className="text-3xl font-bold	md:text-4xl text-center my-2 md:my-4 mt-4 md:mt-8">
       Limitations 
      </h2>
      <div className="bg-[#ffffff18] shadow-xl space-y-4 text-base	md:text-lg rounded-xl p-4 md:p-8  pb-8 md:pb-16">
<p>How is the calculator able to merge the two statistical samples (ASEC and NHANES) to generate one reliable result?</p>
<p>In an ideal world this calculator would process just one single big statistical sample of a survey that includes all the details we need: age, marital status, race, height, bmi and personal income. Unfortunately, this is not the case. The ASEC survey lacks height and bmi details, while the NHANES lacks details about personal income. Therefore, the Female Delusion Calculator has to run two different searches, one for income and one for body measures, then it combines the two results (both opportunely filtered by age, marital status and race) into one single percentage value.</p>
<p>The final percentage is not far from reality but it&apos;s not entirely accurate because it doesn&apos;t take into account the correlations between income and height or weight. For example, there have been studies showing that taller people tend to be paid slightly more. So, by processing the two searches independently, the calculator might underestimate the number of tall high income individuals and overestimate the tall low income ones and so on. Still... I wouldn&apos;t expect the results to be way off, but keep it in mind and take the final number with a grain of salt.</p>
    </div>
    </div>
  );
};

export default Stats;
