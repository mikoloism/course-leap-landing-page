/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './libs/theme/**/*.{ts,tsx}',
    ],
    theme: {
        colors: require('./libs/theme/config/color').color,
        extend: {
            fontFamily: require('./libs/theme/config/font-family').fontFamily,
            fontSize: require('./libs/theme/config/font-size').fontSize,
            boxShadow: require('./libs/theme/config/shadow').shadow,
            animation: require('./libs/theme/config/animation').animation,
            keyframes: require('./libs/theme/config/keyframes').keyframes,
            variant: require('./libs/theme/config/variants').variants,
        },
    },
    plugins: [],
};
