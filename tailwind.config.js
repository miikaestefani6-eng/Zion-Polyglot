module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        zion: {
          dark: '#0A0D12',
          card: '#0D1117',
          purple: '#9333EA',
          gold: '#F59E0B',
        },
      },
    },
  },
  plugins: [],
};
