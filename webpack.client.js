const path = require('path')

module.exports={
  entry:'./src/client.js',
  output:{
    filename: 'client_bundle.js',
    path:path.resolve(__dirname,'build/public'),
    publicPath:'/build/public'
  },
  module:{
    rules:[
      {test:/\.js$/,
        exclude:/node_modules/,
        loader:'babel-loader',
        options:{
          presets:[
            'react',
            'stage-0',
            ['env',{
              target: { browsers:['last 2 versions']}
            }]
          ]
        }
      }
    ]
  }
}
