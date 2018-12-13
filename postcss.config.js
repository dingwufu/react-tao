module.exports = (ctx) => ({
  ident: 'postcss',
  map: ctx.env === 'development' ? ctx.map : false,
  plugins: {
    'postcss-plugin': ctx.env === 'production' ? {} : false,
    'postcss-import': {},
    'cssnano': ctx.env === 'production' ? {} : false,
    'postcss-flexbugs-fixes': {},
    'postcss-nested': {},
    'autoprefixer': {
      browsers: [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9', // React doesn't support IE8 anyway
      ],
      flexbox: 'no-2009',
    },
  }
})
