import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <Navbar />
  );
}

function Navbar() {
  return (
    <div className="Navbar">
      <a className="NavItem">Home</a>
      <a className="NavItem">Resume</a>
      <a className="NavItem">Contact</a>
    </div>
  )

  
}

export default App;
