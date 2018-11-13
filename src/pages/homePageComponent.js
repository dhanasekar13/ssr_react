import React, {Component} from 'react'


class Home extends Component {
  hit() {
    console.log('hitted me ')
  }
  render() {
    return (
      <div>
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
