import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      'md': '0.375rem',
      'lg': '0.5rem',
      'full': '9999px',
      'phone': '40px',
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        // Steezy
        'custom': ['Steezy', 'sans-serif'],
      },
      textShadow: {
        'default': '2px 2px 0px #000, -1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000',  // Custom shadow
      },
    },
  },
  plugins: [function({ addUtilities }) {
      const newUtilities = {
        '.text-shadow': {
          textShadow: '2px 2px 2px #000, -1px 1px 1px #000, 1px -1px 1px #000, -1px -1px 1px #000',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    }
  ],
};
export default config;
