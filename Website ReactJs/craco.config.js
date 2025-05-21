const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./public/index.html', './src/**/*.{js,jsx,ts,tsx}'],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  style: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === 'production' ? [purgecss] : [])
      ]
    }
  }
};
