/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    // "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     colors:{
        "orange":"hsl(26, 100%, 55%)",
        "pale-orange":"hsl(25, 100%, 94%)",
        "very-dark-blue":"hsl(220, 13%, 13%)",
        "dark-grayish-blue":"hsl(219, 9%, 45%)",
        "grayish-blue":"hsl(220, 14%, 75%)",
        "light-grayish-blue":"hsl(223, 64%, 98%)",
     },
     
    },
  },
  plugins: [],
};
