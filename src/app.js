import React, {Component} from 'react'
import {Switch,Route} from 'react-router'
import Home from './pages/homePageComponent'
import One from './pages/One'

class App extends Component {
  render() {
    return (
          <Switch>
            <Route exact path='/' render={
              props => ( <Home {...props} />)
            }/>
            <Route exact path='/one' render={
              props=>(<One {...props}/>)
            }/>
          </Switch>
    )
  }
}

export default App
