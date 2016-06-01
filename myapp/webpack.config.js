module.exports = {
    entry: "./harmony/app/main.js",
    output: {
        filename: "./public/javascripts/main.js"
    },
    watch: true,
    devtool: 'eval-source-map',

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"]
        }]
    }
};