var path = require('path');
var nodeExternals = require('webpack-node-externals');

var config = {
    target: 'node',
    externals: [nodeExternals()],

    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },

    devtool: 'inline-source-map',

    // The entry point of the application.
    entry: ['./src/server/server.ts'],

    // Location of the bundled file.
    output: {
        path: path.resolve('./build/public'),
        publicPath: '/public/',
        filename: '../server.js',
        libraryTarget: 'commonjs2'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js'],
        modules: [path.resolve(__dirname), 'node_modules', 'src'],
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                use: [{ loader: 'source-map-loader' }],
                exclude: '/node_modules'
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                exclude: '/node_modules'
            }
        ]
    },
};

module.exports = config;