module.exports = {
    entry: "./main.js",
    module:{
        rules:[
            {
                test:/\.js$/,
                use:{
                    loader:"babel-loader",
                    options:['@babel/preset-env']
                }
            }
        ]
    }
}