const  ParallelUglifyPlugin  = require('webpack-parallel-uglify-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const os = require("os");

module.exports = {
    output:{
        filename: "./scripts/[name].[hash:5].bundles.js",
        publicPath: "/"
    },
    // plugins: [
    //     new ParallelUglifyPlugin({
    //       exclude:/\.min\.js$/, 
    //       workerCount: os.cpus().length, 
    //       sourceMap:true, 
    //     //   uglifyJS: {
            
    //     //     },
    //       uglifyES: {
    //           output:{
    //               beautify: false,
    //               comments: false
    //           },
    //           compress:{
    //               warnings: false,
    //               drop_console:true,
    //               collapse_vars:true
    //           }
    //         }
    //     }),
    //   ],
}