import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [forms],

    safelist: [
        {
            pattern: /text-(fuchsia|red|orange|yellow|sky|slate|zinc)-(50|200|300|400|500|600|700|800|950)/,
        },
        {
            pattern: /animate-ping/,
        },
        {
            pattern: /space-x-(4)/,
        }
    ],

    variants: {
        extend: {
            backgroundColor: ['disabled'],
        },
    }
};
