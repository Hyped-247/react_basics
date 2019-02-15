const path = require('path');

console.log();

module.exports = {
    entry: '/Users/mohammad/PycharmProjects/react_basics/src/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js',
    },
    mode: 'development',
};