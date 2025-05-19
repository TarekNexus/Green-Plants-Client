import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import AuthProvider from './Provider/AuthProvider.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/routes.jsx'
import "./index.css"
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
<><RouterProvider router={router} />     
  <ToastContainer></ToastContainer>    
  </>
</AuthProvider>
  </StrictMode>,
)
