import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TracksProvider } from './context/TracksContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TracksProvider>
      <App />
    </TracksProvider>
  </StrictMode>,
)
