import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import './styles/globals.css'
import './styles/premium-identity.css'
import { ContactModalProvider } from './hooks/useContactModal'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ContactModalProvider>
        <App />
      </ContactModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)