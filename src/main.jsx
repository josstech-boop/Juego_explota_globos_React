import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { JugadorContextProvider } from './JugadorContext/index.jsx'
import { PantallaDinamica } from './PantallaDinamica/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <JugadorContextProvider>
      <PantallaDinamica />
    </JugadorContextProvider>
  </StrictMode>,
)
