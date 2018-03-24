const path = require('path');

const paths = {
    PUBLIC: path.resolve(__dirname, 'public'),
    JS: path.resolve(__dirname, 'source/js'),
};

console.log('related paths: \n', paths);

module.exports = {
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

            {
                test: /\.scss/,
                use: [

                    'style-loader',

                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 2
                        },

                    },

                    {
                        loader: 'sass-loader',
                        options: {
                            importer: function (url) {
                                if (url.indexOf('@material') === 0) {
                                    var filePath = url.split('@material')[1];
                                    var nodeModulePath = `./node_modules/@material/${filePath}`;
                                    return {file: require('path').resolve(nodeModulePath)};
                                }
                                return {file: url};
                            },
                            sourceMap: true,
                            includePaths: ['./node_modules/']
                        }
                    }
                ]
            }

        ]
    }
};
