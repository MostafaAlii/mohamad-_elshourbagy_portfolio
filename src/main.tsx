import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/resources/css/global.css'
import './styles/resources/colors.ts'

import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
