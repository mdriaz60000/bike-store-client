import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { ThemeProvider } from './components/ThemProvider/ThemProvider'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
    <RouterProvider router={Router} />
    </ThemeProvider>
    
    
  </StrictMode>,
)
