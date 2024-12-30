import './index.css'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { WorldRanks } from './WorldRanks'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <WorldRanks />
    </BrowserRouter>
  </StrictMode>,
)
