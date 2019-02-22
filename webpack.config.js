const path = require('path');

module.exports = {
    entry: '/Users/mohammad/PycharmProjects/react_basics/src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development',
};