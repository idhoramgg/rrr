import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from './components/Navbar';
import Header from './pages/Header';
import About from './pages/About';
import Skills from './pages/Skills';
import GetInTouch from './pages/GetInTouch';

const App = () => {
  return(
    <Router>
      <Navbar/>
        <Route exact path="/">
          <Header />
        </Route>
      <Switch>
        <Route exact path="/about">
          <About/>
        </Route>
        <Route exact path="/skills">
          <Skills/>
        </Route>
        <Route exact path="/contact">
          <GetInTouch/>
        </Route>
      </Switch>
    </Router>  
  )
}

export default App;