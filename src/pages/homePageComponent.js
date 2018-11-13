import React, {Component} from 'react'
import {Helmet} from 'react-helmet'

class Home extends Component {
  hit() {
    console.log('hitted me ')
  }
  head() {
        return (
          <Helmet>
          <meta content='dhanasekar/rendering_ssr' />
            <title>My page dhanasekar</title>
          </Helmet>
        )
  }
  render() {
    return (
      <div>
      {this.head()}
          <h1>
              My Home page of the application in the program of the respective erp
          </h1>
          <p>
              The paragraph page of the application
          </p>
          <button onClick={()=>this.hit()}>Click button of the application</button>
      </div>
    )
  }
}

export default Home
