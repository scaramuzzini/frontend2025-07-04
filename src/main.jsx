import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import JogoDaVelha from './Jogo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JogoDaVelha />
  </StrictMode>,
)
