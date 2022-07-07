import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import { BrowserRouter } from 'react-router-dom'

// components

import App from './App'
import { CollapseDrawerProvider } from './contexts/CollapseDrawerContext'

const containerElement = document.getElementById('root')

if (!containerElement)
  throw new TypeError("HTML element with ID 'root' not found")

const root = createRoot(containerElement)

root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CollapseDrawerProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CollapseDrawerProvider>
    </HelmetProvider>
  </React.StrictMode>
)
