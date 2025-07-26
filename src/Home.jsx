import { Link } from 'react-router-dom';

import { useState } from 'react'
import Nav from './Nav'

import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <body className = 'hpbd'>
        <Nav/>
        <div className = 'title'>
          <h1>travis sc<span className="o">oo</span>tt</h1>
          <p>Jacques Bermon Webster II</p>
        </div>
        <button className="book-button"><Link to="/booking">Book now</Link></button>
      </body>
    </>
  )
}

export default App
