const path = require('path');

module.exports = {
    devtools: 'cheap-module-eval-source-map',
   
    entry: './src/index.js',
   
    output: {
        path:'',
        filename:'bundle.js',
        publicPath: path.resolve(__dirname, 'dist') 
    },

    resolve: {
        extensions: ['.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader' ,
                exclude: /node_modules/
            }
        ]
    }
}