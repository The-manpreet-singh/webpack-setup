const path = require('path');
const autoprefixer = require('autoprefixer');

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
            },

            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },

                    {  
                        loader: 'css-loader',
                        options: {
                            importLoaders:1,
                            module: true,
                            localIdentName: '[name]__[local]__[hash:base64:5]'
                        }
                     },
 
                     {
                         loader: 'postcss-loader',
                         options: {
                             ident: 'postcss',
                             plugins : () => [
                                 autoprefixer({
                                    "> 1%",
                                    "last 2 versions"
                                 })
                             ]
                         }
                     }

                ]
            }
        ]
    }
}