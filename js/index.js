var path = require('path')
var express=require(`express`)
// var cors =require(`cors`)
var app=express()
// var path=require(`path`)

// app.use(cors())
app.use(express.static(__dirname+`style.css`));
app.get(`style.css`,function (req,res) {
res.sendFile(path.join(__dirname+`/index.html`));    
})
app.listen(80,function () {
    console.log(`CORS-enable web server listening on port 3000`)
    
})
// const path=require(`path`)
// const HTMLWebpackPlugin=require(`html-webpack-plugin`);

// module.exports={
//     entry:'./src/index.js',
//     output:{
//         path:path.resolve(__dirname,'dist'),
//         filename:`bundle.js`
//     },
//     module:{
//         rules:[
//             {
//                 test:/\.js$/,
//                 exclude:/node_modules/,
//                 use:`babel-loader`
//             },
//             {
//                 test:/\.css$/,
//                 use:[`style-loader`,`css-loader`]
//             }
//         ]
//     },
//     plugins:[
//         new HTMLWebpackPlugin({
//             template:`./src/index.html`,
//             filename:`inedx.html`
//         })
//     ]
// }