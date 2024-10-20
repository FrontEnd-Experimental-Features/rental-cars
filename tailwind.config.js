/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Your theme extensions here
    },
  },
  plugins: [
    // Use a dynamic import for the line-clamp plugin
    async () => {
      const { default: lineClamp } = await import('@tailwindcss/line-clamp');
      return lineClamp;
    },
  ],
}
