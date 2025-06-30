import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './routes/Router'
import { ThemeProvider } from './components/ThemProvider/ThemProvider'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store'
import { PersistGate } from 'redux-persist/integration/react'
import { Toaster } from './components/ui/sonner'

import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'


const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode >
    <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'></div>
    <QueryClientProvider client={queryClient}>
  <Provider store={store}>
    <ThemeProvider> 
    <PersistGate loading={null} persistor={persistor}>
    <RouterProvider router={Router} />
    <Toaster />
    </PersistGate>
    </ThemeProvider>
    </Provider>
    </QueryClientProvider>
  
   
    
   
    
    
  </StrictMode>,
)
