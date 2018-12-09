module.exports = {
    output:{
        filename: "scripts/[name].bundles.js",
    }
    // module: {
    //     rules: [{
    //         test: /\.css$/,
    //         use: [{
    //                 loader: MiniCssExtractPlugin.loader,
    //                 options:{
    //                     publicPath:"../"
    //                 }
    //             },
    //             //'style-loader',
    //             {
    //                 // loader: 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
    //                 loader: 'css-loader'
    //             }
    //         ]
    //     }, ],
    // },
    // plugins: [
    //     new WebpackDeepScopeAnalysisPlugin(),
    //     // new ExtractTextPlugin('[name].[contenthash].css'),
    //     // Make sure this is after ExtractTextPlugin!
    //     // {
    //     //     loader: MiniCssExtractPlugin.loader,
    //     //     options: {
    //     //       //you can specify a publicPath here
    //     //       //by default it use publicPath in webpackOptions.output
    //     //       publicPath: '../'
    //     //     }
    //     // },
    //     new MiniCssExtractPlugin({
    //         // Options similar to the same options in webpackOptions.output
    //         // both options are optional
    //         filename: "[name].css",
    //         chunkFilename: "[id].css"
    //     }),
    //     new PurifyCSSPlugin({
    //         // Give paths to parse for rules. These should be absolute!
    //         paths: glob.sync(path.join(__dirname, './dist/*.html')),
    //     })
    // ]
}