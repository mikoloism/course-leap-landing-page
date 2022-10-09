/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './libs/constants/**/*.{ts,tsx}',
    ],
    theme: {
        colors: require('./libs/theme/color').color,
        extend: {
            fontFamily: require('./libs/theme/font-family').fontFamily,
            fontSize: require('./libs/theme/font-size').fontSize,
            boxShadow: require('./libs/theme/shadow').shadow,
            animation: require('./libs/theme/animation').animation,
            keyframes: require('./libs/theme/keyframes').keyframes,
        },
    },
    plugins: [],
};
