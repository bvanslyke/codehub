const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        port: 3000
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist") // eslint-disable-line
    }
};
