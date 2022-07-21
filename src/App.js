import React from 'react'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'


const App = () => {
  return (

    <Router>
      <Navbar />
      <Switch>

        <Route exact path='/' ><div className="Home"><Home /></div></Route>


      </Switch>

      {/* <Footer/> */}
    </Router>
  )
}

export default App
