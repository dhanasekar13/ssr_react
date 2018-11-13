import 'babel-polyfill'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import bodyParser from 'body-parser'
const app               = express()
const PORT              = process.env.PORT || 3000;
import {Helmet} from 'react-helmet'
import App from './src/app'
var path = require('path')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('build/public'))
app.get('/signup',(req,resp)=>{
  resp.sendFile(path.resolve('full/ssrendering/ssr3/build/public/index.html'))
})

app.get('/chk',(req,resp)=>{
  resp.json({
    'one':1,
    'two':2,
    'three':3,
    'four':4,
    'five':5,
    'six':6,
    'seven':7,
    'eight':8,
    'nine':9,
    'ten':10,
    'eleven':11,
    'tweleve':12,
    'thirty':13
  })
})

app.get('/okay',(req,resp)=>{
  resp.send('hey this okay message checking of the application')
})

app.get('*',(req,resp)=>{
  const context = {}
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
        <App />
    </StaticRouter>
  )

  const helmet = Helmet.renderStatic()

  const html =`
      <html>
        <head>
        ${helmet.meta.toString()}
${helmet.title.toString()}
        </head>
        <body>
            <div id='root'>
                ${content}
            </div>
            <script src='client_bundle.js'></script>
        </body>
      </html>
  `
  resp.send(html)
})


app.listen(PORT,()=>{
  console.log(`The Server is RUnning in PORT ${PORT}`)
})
