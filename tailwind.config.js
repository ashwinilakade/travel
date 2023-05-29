/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        grey: '#E2E3E5',
        'sky-blue': '#87CEEB',
      },
      fontSize: {
        sm: '12px',
        ssm: '14px',
        md: '16px',
        lg: '18px',
        '2lg': '20px',
        '3lg': '22px',
        '4lg': '24px',
        '5lg': '26px',
      },
      backgroundImage: {
        'bg-image': "url('/public/assets/images/bg1.png')",
        'bg-image1': "url('/public/assets/images/bg1.png')",
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '50%': '50%',
        '100%': '100%',
      },
    },
  },
  plugins: [],
};
