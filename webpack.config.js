var path = require('path');
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    context: path.resolve(__dirname, 'js'),
    externals: {
      "jquery": "jQuery"
    },
    entry: {
        index: './import.js',
        pluging: './pluging.js',
    },
    output: {
        path: path.resolve(__dirname, './assets/'),
        filename: './js/[name].bundle.js',
    },
    module: {

        rules: [
            {
                test: /\.(js)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                      presets: ['@babel/preset-env'],

                    }
                }
            },
            {
                test: /\.css$/,
                use: [
                    { loader: MiniCssExtractPlugin.loader },
                    'css-loader','sass-loader'
                ]
            },
        ],
    },
    plugins:[
        new MiniCssExtractPlugin({filename: './css/[name].css'})
    //    new UglifyJsPlugin(),

      //  new WebpackObfuscator ({ //可混淆語法但檔案變很大
      // rotateStringArray: true
      //   }, ['excluded_bundle_name.js'])
    ],
    devtool: "source-map",
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            // 關閉生成CC 暫時不開啟
            // extractComments: false,
        })],
      },
    mode: 'production'

}
