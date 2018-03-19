const path = require('path');

const paths = {
    PUBLIC: path.resolve(__dirname, 'public'),
    JS: path.resolve(__dirname, 'js'),
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

                                ['env', {modules: false}]

                            ]
                        }
                    }

                ]
            }

        ]
    }
};
