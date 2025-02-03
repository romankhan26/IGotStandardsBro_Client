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
        'primary-soft-pink': '#B76E79',       // Soft Pink (Primary Color)
        'secondary-lavender': '#B497BD',      // Lavender (Secondary Color)
        'accent-mint-green': '#FFFFF0',       // Mint Green (Accent Color)
        'text-dark-charcoal': '#4a261b',      // Dark Charcoal (Text Color)
        'cta-coral': '#FF6F61',               // Coral (Hover/CTA Color)
        'secondary-text-light-gray': '#7D7D7D', // Light Gray (Secondary Text Color)
        // 'secondary':'#ffff1111'
      },
    },
  },
  plugins: [],
} satisfies Config;
