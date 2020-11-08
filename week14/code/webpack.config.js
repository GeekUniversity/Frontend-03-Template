'use strict';

const glob = require('glob');
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    entry: {
        'app': './src/index.js'
    },
    output: {
        filename: '[name].js'
    },
    resolve: {
        extensions: [ ".js", "jsx",".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|tsx)?$/,
                enforce: "pre",
                exclude: /(node_modules|bower_components)/, 
                use: [
                    {
                    
                        loader: "babel-loader",
                        options: {
                            presets: [
                                "@babel/preset-env",
                                "@babel/preset-react"
                            ],
                            plugins: [
                                "@babel/plugin-syntax-dynamic-import",
                                "@babel/plugin-proposal-class-properties"
                            ]
                        }
                  
                    },
                ]
            },
            
            {
                test: /.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
           
           
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inlineSource: '.css$',
            template: './src/index.html',
            filename: `index.html`,
            // chunks: ['vendors', 'index'],
            inject: true,
            minify: {
                html5: true,
                collapseWhitespace: true,
                preserveLineBreaks: false,
                minifyCSS: true,
                minifyJS: true,
                removeComments: false
            }
        }),
        
        // new FriendlyErrorsWebpackPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}
