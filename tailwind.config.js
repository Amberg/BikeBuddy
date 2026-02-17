/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{html,ts}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                primary: '#1F2937', // Dark gray/black from shoe app button
                secondary: '#F3F4F6', // Light gray background
                accent: '#EF4444', // Red accent (like the heart/sale tag)
                surface: '#FFFFFF',
                'brand-light': '#F9FAFB',
                'text-main': '#111827',
                'text-sub': '#6B7280',
                'success': '#10B981',
                'warning': '#F59E0B',
                'danger': '#EF4444',
            },
            boxShadow: {
                'card': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
                'floating': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)',
                'nav': '0 -4px 20px rgba(0,0,0,0.05)',
            },
            borderRadius: {
                'xl': '16px',
                '2xl': '24px',
                '3xl': '32px',
            }
        },
    },
    plugins: [],
}
