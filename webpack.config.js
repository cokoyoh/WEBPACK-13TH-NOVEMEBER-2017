module.exports = {
    entry: ["./app.js", "./second.js", "./script.es6"],
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel-loader', //using babel-loader here
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.es6'] //this allows these extensions to be executed
    },
    watch: true //this is to watch for changes in the files for hot-loading
}