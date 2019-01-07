const merge = require('webpack-merge');
const common = require('./webpack.common.js');
var path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 80,
        proxy: {
            "/github": {
                target: "https://api.github.com",
                pathRewrite: { "^/github": "" }
            }
        }
    },
});