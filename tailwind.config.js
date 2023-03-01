  module.exports = {
  theme: {    
    extend: {
      colors: {
        primary: "#1877f2",
      },
    },
  },
  variants: {},
  purge: {
    content: [
      'node_modules/tv-*/dist/tv-*.umd.min.js',
    ],
  },
  plugins: [
    
  ],
}
