import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home'
import Resume from './Resume';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>

      </Switch>
     
    </Router>
  );
}

function Navbar() {
  return (
    <div className="Navbar">
      <a className="NavItem" href='/'>Home</a>
      <a className="NavItem" href='/resume'>Resume</a>
      <a className="NavItem">Contact</a>
    </div>
  )

  
}

export default App;
