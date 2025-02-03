import { Poppins, Merriweather, Lora } from "next/font/google";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin"],
});
const lora = Lora({
  weight: ["400", "700"],
  subsets: ["latin"],
});
const merriweather = Merriweather({
  weight: ["300", "400"],
  subsets: ["latin"],
});

interface props {
  text: string;
  className?: string;
}

export const H_One = ({ text, className }: props) => {
  return (
    <h1
      className={`${className}  text-4xl md:text-5xl font-poppins lg:text-6xl font-bold text-text-dark-charcoal ${poppins.className}`}
    >
      {text}
    </h1>
  );
};

export const H_Two = ({ text, className }: props) => {
  return (
    <h2
      className={`${className}  text-3xl md:text-4xl  lg:text-5xl font-poppins font-medium text-primary-soft-pink ${poppins.className}`}
    >
      {text}
    </h2>
  );
};
export const H_Three = ({ text, className }: props) => {
  return (
    <h3
      className={`${className}  text-2xl md:text-3xl  lg:text-4xl font-normal text-secondary-lavender  ${poppins.className}`}
    >
      {text}
    </h3>
  );
};
export const H_Four = ({ text, className }: props) => {
  return (
    <h4
      className={`${className}  text-xl md:text-2xl  lg:text-3xl font-merriweather font-normal text-accent-mint-green	  ${poppins.className}`}
    >
      {text}
    </h4>
  );
};
export const H_Five = ({ text, className }: props) => {
  return (
    <h5
      className={`${className}   font-lora text-lg md:text-xl lg:text-2xl  text-light-gray ${poppins.className}`}
    >
      {text}
    </h5>
  );
};
export const H_Six = ({ text, className }: props) => {
  return (
    <h6
      className={`${className}  font-lora text-base md:text-lg lg:text-xl font-normal text-secondary-lavender     ${poppins.className}`}
    >
      {text}
    </h6>
  );
};