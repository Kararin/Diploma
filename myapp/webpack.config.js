module.exports = {
    entry: "./app/es6/app/main.js",
    output: {
        filename: "./public/javascripts/main.js"
    },
    watch: true,
    devtool: 'source-map',

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    }
};