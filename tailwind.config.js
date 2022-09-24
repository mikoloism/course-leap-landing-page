/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './libs/constants/**/*.{ts,tsx}',
    ],
    theme: {
        colors: {
            transparent : 'transparent',
            currentColor: 'currentColor',
            primary     : '#23A6F0',
            secondary   : '#252B42',
            gray        : {
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
                    '72px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '110px',
                        letterSpacing: '0.5px',
                    },
                ],
                h2: [
                    '52px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '72px',
                        letterSpacing: '0.5px',
                    },
                ],
                h3: [
                    '34px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '72px',
                        letterSpacing: '0.5px',
                    },
                ],
                h4: [
                    '30px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '68px',
                        letterSpacing: '0.5px',
                    },
                ],
                h5: [
                    '26px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '56px',
                        letterSpacing: '0.3px',
                    },
                ],
                h6: [
                    '24px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '56px',
                        letterSpacing: '0.5px',
                    },
                ],
                link: [
                    '20px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '45px',
                        letterSpacing: '0.5px',
                    },
                ],
                btn: [
                    '20px',
                    {
                        fontWeight   : 'bold',
                        lineHeight   : '45px',
                        letterSpacing: '0.5px',
                    },
                ],
                input: [
                    '16px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '45px',
                        letterSpacing: '0.5px',
                    },
                ],
                subtitle: [
                    '30px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '70px',
                        letterSpacing: '0.5px',
                    },
                ],
                paragraph: [
                    '19px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '45px',
                        letterSpacing: '0.5px',
                    },
                ],
                standard: [
                    '16px',
                    {
                        fontWeight   : 'regular',
                        lineHeight   : '45px',
                        letterSpacing: '0.5px',
                    },
                ],
            },
            boxShadow: {
                accented: '0 13px 19px 0 rgba(0,0,0, 0.07)',
            },
        },
    },
    plugins: [],
};
