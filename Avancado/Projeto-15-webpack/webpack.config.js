// #F0481 3_Configurando o Webpack
const path = require("path"); // lidar com os caminhos dos arquivos
const HTMLWebpackPlugin = require("html-webpack-plugin"); // plugin para gerar o arquivo HTML

module.exports = {
    entry: path.resolve(__dirname, "src", "js", "index.js"), // ponto de entrada do webpack
    output: { // ponto de saída do webpack
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    mode: "development",

    // #F0485 7_Webpack dev server
    devServer: {
        static: {
            directory: path.join(__dirname, "dist", "index.html"),
        },
        port: 3000,
        open: true,
    },

    // #F0482 4_Como incluir o HTML
    plugins: [new HTMLWebpackPlugin()],

    // #F0483 5_Como incluir o CSS
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
                exclude: "/node_modules",
            },
            
            // #F0484 6_Como incluir o Babel
            {
                test: /\.js$/i,
                exclude: "/node_modules",
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [["@babel/preset-env", { targets: "defaults" }]],
                    }
                }
            }
        ]
    }
}