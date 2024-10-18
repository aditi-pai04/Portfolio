import React from 'react';
import Home from './Home'; // Adjust path as necessary
import './index.css'; // Import global styles
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
};

export default App;
