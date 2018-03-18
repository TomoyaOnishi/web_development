const path = require('path');

const paths = {
    PUBLIC: path.resolve(__dirname, 'public'),
    JS: path.resolve(__dirname, 'js'),
    NODE_MODULE: path.resolve(__dirname, 'node_modules')
};

console.log('related paths: \n', paths);

module.exports = {
    entry: path.join(paths.JS + '/App.js'),
    output: {
        path: paths.PUBLIC,
        filename: 'bundle.js'
    }
};
