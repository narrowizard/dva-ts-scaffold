const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const antd = require('./src/themes/antd');

module.exports = {
    entry: [
        './src/index.tsx'
    ],
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ],
    output: {
        publicPath: '/',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                            getCustomTransformers: () => ({
                                before: [tsImportPluginFactory({
                                    libraryDirectory: 'es',
                                    libraryName: 'antd',
                                    style: true,
                                })]
                            }),
                            compilerOptions: {
                                module: 'es2015'
                            }
                        }
                    }
                ]
            },
            {
                test: /\.css$/,
                exclude: /^node_modules$/,
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                        }
                    },
                ]
            },
            {
                // 项目的样式, 开启css modules
                test: /\.less$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]___[hash:base64:5]",
                            sourceMap: true,
                            minimize: true
                        }
                    },
                    {
                        loader: 'less-loader',
                    }
                ]
            },
            {
                // antd styles, without css modules
                test: /\.less$/,
                include: [
                    path.resolve(__dirname, 'node_modules')
                ],
                use: [
                    {
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'less-loader',
                        options: {
                            javascriptEnabled: true,
                            modifyVars: antd
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            bypassOnDebug: true, // webpack@1.x
                            disable: true, // webpack@2.x and newer
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@models': path.resolve(__dirname, 'src/models/'),
            '@definitions': path.resolve(__dirname, 'src/definitions/'),
            '@components': path.resolve(__dirname, 'src/components/'),
        }
    },
};
