import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Nota from './components/Nota'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nota nota = {90}/>
    <Nota nota = {75}/>
    <Nota nota = {60}/>
  </StrictMode>,
)
