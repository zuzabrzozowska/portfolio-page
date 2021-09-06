import React, { useState, useEffect, useRef } from 'react'
import './reset.css'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Pages/home'
import Resume from './components/Pages/resume'
import Projects from './components/Pages/projects'
import About from './components/Pages/about'
import Sidebar from './components/parts/sidebar'

// would be cool to add: 
// * mouse eyes follow

const App = ({ }) => {
  const [background, setBackground] = useState('');
  const [showScrollUp, setShowScrollUp] = useState(false)
  const bgRef = useRef();
  bgRef.current = background;


  useEffect(() => {
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])


  const handleScroll = () => {
    if (window.scrollY === 0) {
      setShowScrollUp(false)
      setBackground('bg-eggshell')
    }
    if (window.scrollY > 50) {
      setShowScrollUp(true)
      setBackground('bg-beige')
    }
  }

  return (
    <Router>
      <div className={`row page ${background}`}>

        <Sidebar />

        <div className="col-9 content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/projects">
              <Projects />
            </Route>
          </Switch>
        </div>

        <a href="#" className={`back-to-top ${showScrollUp ? 'visible' : 'invisible'}`}>
          <span className="back-to-top-icon">Scroll up</span>
        </a>

      </div>

    </Router>

  );
}

export default App;
