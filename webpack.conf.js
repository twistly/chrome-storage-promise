module.exports = {
    entry: './index.js',
    output: {
        filename: 'chrome-storage-promise.js'
    },
    module: {
        loaders: [{
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel'
        }]
    }
};
