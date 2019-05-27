const path = require('path')
const webpack = require('webpack')

module.exports = {
    entry: path.join(__dirname, 'app/js/app.js'),
    output: {
        path: path.resolve(__dirname, "app/js"),
        filename: "app.bundle.js"
    },
    module: {
        rules: [
            {
                test: /\.js/,
                exclude: /node_modules/,
                use: [{
                    loader: "babel-loader"
                }]
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery'
        })
    ],
    mode:"development",
    devServer: {
            contentBase: './public',
            inline:true,
            port: 3000
    }
}