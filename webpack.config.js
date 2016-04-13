module.exports = {
  entry: "./app.js",
  output: {
    filename: "./bundle.js"
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {test: /\.css$/, loader: 'style!css', exclude: /node_modules/},
    ]
  }
};
