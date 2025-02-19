import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { ThemeProvider } from './components/ThemProvider/ThemProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <Provider store={store}>
    <ThemeProvider> 
    <RouterProvider router={Router} />
    </ThemeProvider>
    </Provider>
   
    
   
    
    
  </StrictMode>,
)
