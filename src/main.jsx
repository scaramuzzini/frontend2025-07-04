import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MeuApp from './Ocean.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MeuApp />
  </StrictMode>,
)
