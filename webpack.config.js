const path=require('path'); //imports the path package 
const HtmlWebpackPlugin=require('html-webpack-plugin');
module.exports={
    entry: ['babel-polyfill','./src/js/index.js'],

    
    output:{
        path:path.resolve(__dirname, 'dist'), 
        filename:'js/bundle.js'
    },
    devServer:{
        contentBase:'./dist' //which folder will serve
    },
    plugins:[//to use the plugin we wnat to copy the index.html and add the script tag every time we bundling
        new HtmlWebpackPlugin({
            filename: 'index.html',// we pass options with an object 
            template: './src/index.html', //the source file 
        })
    ],
module: {
    rules: [
        {test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,             
        use: { loader: 'babel-loader',
                options: {presets:['@babel/preset-env']              
            }
        }           
    }]      
 }
};
