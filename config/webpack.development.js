const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require("os");

module.exports = {
    output:{
        filename: "scripts/[name].bundles.js",
        publicPath: "/"

    },
    optimization: {
        minimizer: [new UglifyJsPlugin({
            // parallel: true
            parallel: os.cpus().length-1
        })]
    }
}