import React from 'react'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom'
import Keeanu from './Components/Keeanu'
import EventCard from './Components/EventCard'
import EventTemplate from './Components/EventTemplate'
import Sponser from './Components/Sponser'


const App = () => {
  return (

    <Router>
      <Navbar />
      <Keeanu />
      <Switch>

        <Route exact path='/' ><div className="Home"><Home /> <Sponser/> </div></Route>
        <Route exact path='/event' ><EventCard /></Route>
        <Route exact path='/event/name' ><EventTemplate /></Route>


      </Switch>

      <Footer/>
    </Router>
  )
}

export default App
