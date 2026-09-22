import type { Config } from "tailwindcss"
import tailwindcssAnimate from "tailwindcss-animate"

const config: Config = {
  // darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    '../../packages/ui/src/**/*.{ts,tsx}',
    '../../apps/**/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        destructive: "#DC2626",
        darkgreen: "#00FF00"
      }
    }
  },
  plugins: [tailwindcssAnimate]
}

export default config