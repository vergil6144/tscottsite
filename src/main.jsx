import { BrowserRouter } from 'react-router-dom';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './Home.jsx'
import Cont from './cont'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cont />
  </StrictMode>
)
