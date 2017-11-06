const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
    // Inform webpack that we're building a bundle for nodeJS, rather for the browser [browser would not see this]
    target: 'node',
    // Tell webpack the root file of our server application
    entry: './src/index.js',
    // Tell webpack where to put the output file (bundle.js) that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    // tell webpack to not bundle any library from node_modules onto the server side bundle.js
    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);