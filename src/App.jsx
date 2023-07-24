import { useState } from 'react'
import missfitImage from './assets/missfit-logo-1.png';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
          <a>
          <img src={missfitImage} className='logo'></img>
          </a>
      </div>
      <h1>Missfit Merch</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Order count is {count}
        </button>
      </div>
    </>
  )
}

export default App
