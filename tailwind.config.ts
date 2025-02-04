import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        lora: ['Lora', 'serif'],
      },
      colors: {
        'primary': '#B76E79',      
        'secondary-lavender': '#006A4E',     
        'accent': '#FFFFF0',    
        'text-dark-charcoal': '#4a261b',     
        'cta-coral': '#FF6F61',              
        'secondary-light-gray': '#7D7D7D',
       
      },
    },
  },
  plugins: [],
} satisfies Config;
