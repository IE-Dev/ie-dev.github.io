const fs = require('fs')
const path = require('path')
const webpack = require( "webpack" )
const YAML = require('yaml')
const file = fs.readFileSync('./config.yml', 'utf8')
const config = YAML.parse(file)
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/"
  },
  module: {
    rules: [
      {
        test: /\.(js)$/i,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new webpack.DefinePlugin( {
      AUTOCOMPELETE_URL: JSON.stringify( config.search_engines.autocomplete )
    } ),
  ]
};
