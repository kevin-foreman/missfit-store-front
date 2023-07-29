// import { useState } from 'react'
import missfitImage from './assets/missfit-logo-1.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import './App.css';

function App() {

  return (
      <div className='App'>
        <Router>
          <Navbar />
          <a>
            <img src={missfitImage} className='logo'></img>
          </a>
          <Routes>
            <Route path="/" element={<Shop />}/>
            <Route path="/cart" element={<Cart />}/>
          </Routes>
        </Router>
      </div>
  )
}

export default App;
