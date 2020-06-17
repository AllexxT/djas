const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./tsite/frontend/src/index.js",
    output: {
        path: path.join(__dirname, "./tsite/frontend/static/frontend"),
        filename: '[name]-[name].js',
        chunkFilename: '[name]-[name].js',
        publicPath: '/static/frontend/'
    },
    // optimization: {
    //     splitChunks: {
    //         chunks: "all"
    //     }
    // },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 999999,
                        }
                    }
                ]
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },
    // watchOptions: {
    //     poll: true
    // },
    // devtool: 'inline-source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../../templates/frontend/admin.html'
        })
  ]
}