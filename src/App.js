import React from 'react';
import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Home from './Home'
import Navbar from './Navbar';
import Register from './Register.js';
import Login from './Login';
function App() {
  return (
    <div className="App">

<Router> 
  <Navbar />
<Routes> 
<Route  path="/Home" element={<Home />} />
<Route  path="/" element={<Login />} />
<Route  path="/Register" element={<Register />} />

</Routes>



    </Router>
    </div>

  );
}

export default App;