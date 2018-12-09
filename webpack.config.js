const WebpackDeepScopeAnalysisPlugin = require('webpack-deep-scope-plugin').default;
const path = require('path');
const glob = require('glob');
const PurifyCSSPlugin = require('purifycss-webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
// const  setIterm2Badge = require('set-iterm2-badge');
// setIterm2Badge("sjh")
const argv = require('yargs-parser')(process.argv.slice(2));
const merge = require("webpack-merge");
const _mode = argv.mode || "development";
const _modeflag = (_mode == "production" ? true : false);
const _mergeConfig = require(`./config/webpack.${_mode}.js`);
// console.log("寻找文件", glob.sync(join(__dirname, './dist/*.html')))
webpackConfig = {
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                        publicPath: "../"
                    }
                },
                //'style-loader',
                {
                    // loader: 'css-loader?modules&localIdentName=[name]_[local]-[hash:base64:5]'
                    loader: 'css-loader'
                }
            ]
        }, ],
    },
    devServer:{
        // port:3000,
        // hot:true,
        before(app){
            app.get("/api/test",(req,res)=>{
                res.json({
                    code:200,
                    message:"hello world"
                })
            })
        }
    },
    optimization:{  //配置多页应用
        splitChunks:{
            cacheGroups:{
                commons:{
                    chunks: "initial",
                    name: "common",
                    minChunks: 1,
                    maxInitialRequests:5,
                    minSize:0
                }
            }
        },
        runtimeChunk:{
            name: "runtime" // 配置公用的包
        }
    },
    plugins: [
        // new WebpackDeepScopeAnalysisPlugin(),
        // new ExtractTextPlugin('[name].[hash:5].css'),
        // Make sure this is after ExtractTextPlugin!
        // {
        //     loader: MiniCssExtractPlugin.loader,
        //     options: {
        //       //you can specify a publicPath here
        //       //by default it use publicPath in webpackOptions.output
        //       publicPath: '../'
        //     }
        // },
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/index.html" //不止可以指定html，还可以指定js
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: _modeflag?"styles/[name].[hash:5].css":"styles/[name].css",
            chunkFilename:_modeflag? "styles/[id].[hash5].css" :"styles/[id].css"
        }),
        // new PurifyCSSPlugin({
        //     // Give paths to parse for rules. These should be absolute!
        //     paths: glob.sync(path.join(__dirname, './src/*.html')),
        // })
    ]
}
module.exports = merge(_mergeConfig, webpackConfig)