/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.


|-------------------------------------------------------------------------------
| The default config
|-------------------------------------------------------------------------------
|
| This variable contains the default Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind defaults.
|
*/

let defaultConfig = require('tailwindcss/defaultConfig');

let colors = {
    transparent: 'transparent',

    white: '#ffffff',
    black: '#000000',

    gray: {
        200: '#f4f6fc',
        300: '#eef3f5',
        400: '#f4f5fa',
        500: '#b0bac9',
        600: '#bfc5d2',
        700: '#8798ad',
        800: '#69707f',
        900: '#2e384d'
    },

    blue: {
        100: '#f8f9ff',
        200: '#e0e7ff',
        500: '#6e9bff',
        700: '#2e5bff'
    },

    red: '#d63649',
    yellow: '#f7c137',
    green: '#33ac2e',
    teal: '#00c1d4',
    purple: '#8c54ff'
};

module.exports = {
    prefix: '',
    important: false,
    separator: ':',
    theme: {
        colors: colors,
        plugins: [],
        fontFamily: {
            'default': ['Rubik', 'sans-serif'],
        }
    },
    variants: {
        opacity: ['hover']
    }
};
