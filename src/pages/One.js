import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

class One extends Component {
  hit() {
    console.log('One component in the application in the field of ones existinges ')
  }
  head() {
        return (
          <Helmet>
          <meta content='dhanasekar/rendering_ssr' />
            <title>One Component of the application</title>
          </Helmet>
        )
  }
  render() {
    return (
      <div>
      {this.head()}
          <h1>
             The One page of the current appliction
          </h1>
          <p>
            any content in the applicatoin
          </p>
          <button onClick={()=>this.hit()}>Click button of the application</button>
      </div>
    )
  }
}

export default One
