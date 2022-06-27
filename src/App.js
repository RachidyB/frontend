import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import Register from './Register.js';
import Login from './Login';
import Contact from './Contact';
function App() {
  return (
    <div className="App">

<Router> 
    <Routes> 
<Route  path="/" element={<Login />} />
    </Routes>
  <Navbar /> 
    <Routes> 
      <Route  path="/Home" element={<Home />} />
      <Route  path="/Register" element={<Register />} />
      <Route  path="/Contact" element={<Contact />} />

    </Routes>
</Router>

    </div>

  );
}

export default App;