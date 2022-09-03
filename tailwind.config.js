/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        colors: {
            primary  : '#23A6F0',
            secondary: '#252B42',
            gray     : {
                100    : '#FAFAFA' /* copyright-background */,
                200    : '#F9F9F9' /* input-background */,
                300    : '#E6E6E6' /* input-border */,
                400    : '#BDBDBD' /* old-price-text */,
                DEFAULT: '#737373',
            },
            white : '#ffffff',
            black : '#000000',
            accent: {
                DEFAULT: '#E74040',
                green  : '#40BB15',
                gold   : '#F3CD03',
            },
            'box-bg': {
                red  : '#FFDCD1',
                green: '#B9EAA8',
                blue : '#B2E3FF',
            },
            img: {
                circle    : '#FEB896',
                'square-1': '#5AACA8',
                'square-2': '#B6D7FF',
            },
        },
        extend: {
            fontFamily: {
                montserrat: ['Montserrat', 'sans'],
            },
            fontSize: {
                h1: [
                    '58px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '80px',
                        letterSpacing: '0.2px',
                    },
                ],
                h2: [
                    '40px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '50px',
                        letterSpacing: '0.2px',
                    },
                ],
                h3: [
                    '24px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '32px',
                        letterSpacing: '0.2px',
                    },
                ],
                h4: [
                    '20px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '30px',
                        letterSpacing: '0.2px',
                    },
                ],
                h5: [
                    '16px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '24px',
                        letterSpacing: '0.1px',
                    },
                ],
                h6: [
                    '14px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '24px',
                        letterSpacing: '0.2px',
                    },
                ],
                link: [
                    '14px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '24px',
                        letterSpacing: '0.2px',
                    },
                ],
                btn: [
                    '14px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '22px',
                        letterSpacing: '0.2px',
                    },
                ],
                input: [
                    '14px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '28px',
                        letterSpacing: '0.2px',
                    },
                ],
                subtitle: [
                    '20px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '22px',
                        letterSpacing: '0.2px',
                    },
                ],
                paragraph: [
                    '14px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '20px',
                        letterSpacing: '0.2px',
                    },
                ],
                small: [
                    '12px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '16px',
                        letterSpacing: '0.2px',
                    },
                ],
            },
        },
    },
    plugins: [],
};
