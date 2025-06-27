const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true, // Clean dist folder before each build
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack App",
      template: "./dist/index.html", // Or skip if you want default HTML
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/, // for .js files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader", // << You forgot this!
        },
      },
      {
        test: /\.css$/, // for .css files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    static: "./dist",
    port: 3000,
    open: true,
  },
};
