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
                lightbg: '#ffffff',
                lightfg: '#f6f8fa',
                darkbg: '#0d1117',
                darkfg: '#161b22',
                gentle: '#e5e7eb',
                disabled: '#cdcfd4',
                warmer: '#262f3b',
                warm: '#1b2029',
                danger: '#f85143',
                warning: '#e8c53a',
            },
        },
    },
    plugins: [],
}
