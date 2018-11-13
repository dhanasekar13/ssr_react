var path = require('path')
const webpackNodeExternals = require('webpack-node-externals')

module.exports = {
  entry:'./server.js',
  output:{
    filename:'bundle.js',
    path:path.resolve(__dirname,'build'),
    publicPath:'/build'
  },
  module:{
    rules:[
      { test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        options:{
          presets:[
            "react","stage-0",
            ['env',{
              target:{ browsers: ['last 2 versions']}
            }]
          ]
        }
      }
    ]
  },
  externals:[webpackNodeExternals()]
}
