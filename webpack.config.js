const path = require('path');

const paths = {
    PUBLIC: path.resolve(__dirname, 'public'),
    JS: path.resolve(__dirname, 'source/js'),
    CSS: path.resolve(__dirname, 'source/css')
};

console.log('related paths: \n', paths);

module.exports = [{
    devtool: 'source-map',
    entry: path.join(paths.JS + '/App.js'),
    output: {
        path: paths.PUBLIC,
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: [

                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [

                                ['env', {modules: false}],

                                'react'

                            ]
                        }
                    }

                ]
            },

        ]
    }
}];


module.exports.push({
    entry: paths.CSS + '/style.scss',
    output: {
        // This is necessary for webpack to compile
        // But we never use style-bundle.js
        path: paths.PUBLIC,
        filename: 'ignore-style-bundle.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: 'bundle.css',
                    },
                },
                {loader: 'extract-loader'},
                {loader: 'css-loader'},
                {
                    loader: 'sass-loader',
                    options: {
                        sourceMap: true,
                        includePaths: ['./node_modules/']
                    }

                },
            ]
        }]
    },
});