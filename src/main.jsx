import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { DeporteProvider } from './Context/DeporteProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DeporteProvider>
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </DeporteProvider>
  </React.StrictMode>,
)
