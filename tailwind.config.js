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

    black: '#2e384d',

    gray: {
        100: '#f8fafc',
        200: '#eef3f5',
        400: '#f4f5fa',
        500: '#bfc5d2',
        600: '#96a7bb',
        800: '#8798ad',
        900: '#69707f'
    },
    white: '#ffffff',

    blue: {
        100: '#eaefff',
        200: '#abbdff',
        400: '#6d8cff',
        500: '#2e5bff',
        600: '#2952e6',
        800: '#1c3799',
        900: '#0e1b4d'
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
        plugins: []
    }
};
