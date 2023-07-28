import { useState } from 'react'
import missfitImage from './assets/missfit-logo-1.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className='App'>
          <a>
          <img src={missfitImage} className='logo'></img>
          </a>
          <Router>
            {/* <Navbar></Navbar> */}
            <Routes>
              <Route path="/" />
              <Route path="/cart" />
            </Routes>
          </Router>
      </div>
      <h1>Swaggy Pop Culture Merch</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Order count is {count}
        </button>
      </div>
    </>
  )
}

export default App;
