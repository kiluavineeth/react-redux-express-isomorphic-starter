var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "styles.css"
    // disable: process.env.NODE_ENV === "development"
});

var config = {
    devtool: 'inline-source-map',

    // The entry point of the application.
    entry: ['./src/index.tsx',
        './src/client/styles/_styles.scss'],

    // Location of the bundled file.
    output: {
        path: path.resolve('./build/public'),
        publicPath: '/public/',
        filename: 'bundle.js'
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
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
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    }, {
                        loader: "sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            }
        ]
    },

    plugins: [
        extractSass
    ]
};

module.exports = config;