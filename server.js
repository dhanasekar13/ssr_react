import 'babel-polyfill'
import express from 'express'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import bodyParser from 'body-parser'
const app               = express()
const PORT              = process.env.PORT || 3000;

import App from './src/app'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(express.static('build/public'))

app.get('*',(req,resp)=>{
  const context = {}
  const content = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={context}>
        <App />
    </StaticRouter>
  )
  const html =`
      <html>
        <head>

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
