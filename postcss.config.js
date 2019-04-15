const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

const isHotReloaded = process.argv.indexOf('serve') !== -1

class TailwindExtractor {
  static extract (content) {
    return content.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    isHotReloaded ? null : purgecss({
        content: ['./src/**/*.vue'],
        extractors: [
            {
                extractor: TailwindExtractor,
                extensions: ['vue', 'css', 'html', 'js']
            },
        ],
        whitelist: ['body']
    }),
    autoprefixer,
  ],
}