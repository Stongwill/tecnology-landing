"use strict";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
let mode = "development";
process.env.NODE_ENV === "production" && (mode = "production");
module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: mode,
  entry: {
    main: "./index.js",
  },
  output: {
    // создание минифированного файла
    filename: "[name].[contenthash].js", // имя
    path: path.resolve(__dirname, "dist"), // создание папки
    clean: true,
  },
  devtool: "source-map", //для отображение в инспекте элементов (возможных ошибок)
  optimization: {
    //дробление файлов
    splitChunks: {
      chunks: "all",
    },
  },
  devServer: {
    port: "4200",
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html" }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  module: {
    rules: [
      { 
        test: /\.html$/i, 
        loader: "html-loader" 
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          mode === "development" ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          // {loader: "postcss-loader",
          // options: {
          //     postcssOptions: {
          //     plugins: [
          //         [
          //             "postcss-preset-env",
          //             {
          //                 //Option
          //             }
          //         ]
          //     ]}
          // }},
          "sass-loader",
        ],
      },
      {
        test: /\.(png|gif|svg|jpg|jpeg)$/i,
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/i,
      },
    ],
  },
};
