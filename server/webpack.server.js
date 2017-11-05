const path = require('path');

module.exports = {
    // Inform webpack that we're building a bundle for nodeJS, rather for the browser [browser would not see this]
    target: 'node',
    // Tell webpack the root file of our server application
    entry: './src/index.js',
    // Tell webpack where to put the output file (bundle.js) that is generated
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    // Tell webpack to run babel on every file it run through
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                options: {
                    presets: [
                        'react', 
                        'stage-0',
                        ['env', { targets: { browsers:['last 2 version'] }}]
                    ]
                }
            }
        ]
    }
};