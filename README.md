# ssr_react
STACK:
    EXPRESS , REACT , BABEL , WEBPACK 
    
    
Server Side Rendering of React Application with webpack


 simple to create a server side rednering react app

1 - Run create-react-app
2 - Delete all unnecessary files and folder (.svg  and css files right)
3 - create 2 webpack config files(server and client)
   
   webpack.server.js
   
entry:'./server' // this is express server entry point
output: '...' // this is the compiled js file which needs to be runned by the node on server side
module: '...' // the main purpose  we use webpack for convert es6 to es5 version and running the react app


    webpack.client.js
 entry: './src/index.js' // the entry point of react 
 output: '...' // this is compiled client side render to server javascript function to run on client side 
         // if we did do this our application will be entirely static it doesnt have a dynmaic activity
         
