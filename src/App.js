import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Register from './Components/Register';
import Discount from './Components/Discount';
import chandruFashion from './Assests/chandru-fashions-high-resolution-logo.png'

function App() {
  return (
    <div className="App">
       <img className='logo-container'
                src={chandruFashion} 
                alt="Fashion Model"
                style={{ width: "30px", borderRadius: "5px" }} 
            />
      <nav className="navbar">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/discount">Discount</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/discount" element={<Discount />} />
      </Routes>
    </div>
  );
}

export default App;
