module.exports = {
  context: `${__dirname}/src`,
  entry: {
    devMark: './devMark.js',
  },
  devtool: 'inline-source-map',

  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: [
            [
              'env',
              {
                targets: { browsers: ['last 2 versions'] },
                modules: false,
              },
            ],
          ],
        },
      },
      {
        test: /\.s?css$/,
        loader: ['style-loader/useable', 'css-loader', 'sass-loader'],
      },
    ],
  },
}
