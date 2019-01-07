const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 80,
        proxy: {
            "/books": {
                target: "https://api.nytimes.com/svc/books/v3",
                pathRewrite: { "^/books": "" }
            }
        }
    },
});