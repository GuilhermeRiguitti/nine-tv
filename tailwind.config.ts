import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundColor: {
        primary: {
          light: '#EDEDED',
          DEFAULT: "#0057FF",
          dark: '#999999'
        },
        secondary: {
          DEFAULT: "#39FF14",
        },
      },
      borderColor: {
        primary: {
          light: '#00AED7',
          DEFAULT: "#003DDC",
          dark: '#061689',
        },
        secondary: {
          DEFAULT: '#39FF14',
        },
        tertiary: {
          DEFAULT: '#E6E7E8',
        }
      },
      textColor: {
        primary: {
          light: '#E0E0E0',
          DEFAULT: "#0057FF",
          dark: '#999999'
        },
        secondary: "#39FF14",
        "bg-primary": "#FFFFFF",
        tertiary: {
          light: "#979797",
          DEFAULT: "#545454",
        }
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontSize: {
        "20": "20px",
        "23": "23px",
        "32": "32px",
        "35": "35px",
        "16": "16px",
        "14": "14px",
        "12": "12px",
      }
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1320px",
      "2xl": "1536px",
    },
    container: {
      center: true,
      screens: {
        lg: "1320px",
        xl: "1320px",
        "2xl": "1320px",
      },

    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
