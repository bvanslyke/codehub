const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: {
        app: "./src/index.js",
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./dist",
        port: 3000,
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Development",
            template: "src/index.ejs"
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["env"]
                    }
                }
            }
        ]
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"), // eslint-disable-line
        publicPath: "/"
    },
    resolve: {
        modules: [
            path.join(__dirname, "src"), // eslint-disable-line
            "node_modules"
        ]
    }
};
