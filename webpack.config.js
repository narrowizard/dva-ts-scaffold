const path = require('path')
const tsImportPluginFactory = require('ts-import-plugin')

module.exports = {
    mode: 'development',
    entry: [
        './src/index.tsx'
    ],
    output: {
        path: path.resolve(__dirname, '/dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        port: 80,
        proxy: {
            '/auth': "http://localhost:8080",
            '/user': "http://localhost:8080",
        }
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
                                    style: 'css',
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
                test: /\.less$/,
                exclude: /^node_modules$/,
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
                        options: {
                            javascriptEnabled: true
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
        extensions: ['*', '.js', '.jsx', '.ts', '.tsx']
    },
};