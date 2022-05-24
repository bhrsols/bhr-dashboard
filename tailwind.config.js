module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './src/**/*.{js,ts,jsx,tsx}'],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                primary: ['Changa'],
            },
            colors: {
                primary: '#1ea3a6',
                secondary: '#2a2d4c',
                blend: '#21838D',
                lightbg: '#ffffff',
                lightfg: '#f6f8fa',
                darkbg: '#0d1117',
                darkfg: '#161b22',
                gentle: '#f3f4f6',
                disabled: '#e5e7eb',
                warmer: '#262f3b',
                warm: '#1b2029',
                danger: '#e74c3c',
                warning: '#f1c40f',
                orange: '#ff8e36',
                pinky: '#ff7fbf',
                watermelon: '#ff0075',
                shade: '#9ca3af',
                green: '#07bc0c',
            },
        },
    },
    plugins: [],
}
