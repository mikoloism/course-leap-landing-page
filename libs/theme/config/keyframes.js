exports.keyframes = {
    'fade-in-up': {
        'from, 0%': { opacity: 0, transform: 'translate(0, 50%)' },
        '90%': { transform: 'translate(0, 0)' },
        'to, 100%': { opacity: 1 },
    },

    'fade-in-down': {
        'from, 0%': { opacity: 0, transform: 'translate(0, -50%)' },
        '90%': { transform: 'translate(0, 0)' },
        'to, 100%': { opacity: 1 },
    },

    'heart-beat': {
        '0%, 40%, 80%, 100%': { transform: 'scale(0.98)' },
        '20%, 60%': { transform: 'scale(1)' },
    },
};
