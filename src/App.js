import React from "react";
import "./reset.css";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Work from "./components/Pages/work";
import About from "./components/Pages/about";
import ProjectPage from "./components/Pages/project";
import Nav from "./components/parts/nav";
import Footer from "./components/parts/footer";

const App = () => {

  return (
    <Router>
      <Nav />
      <main>
        <Switch>
          <Route exact path="/">
            <Work />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
