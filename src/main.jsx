import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { JugadorContextProvider } from './JugadorContext/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JugadorContextProvider>
      <App />
    </JugadorContextProvider>
  </StrictMode>,
)
