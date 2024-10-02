import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@material-tailwind/react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NoPage from './pages/NoPage'
import Login from './commponent/Login'
import Singup from './commponent/Singup'
import Cart from './commponent/Cart'
import { ToastBar, Toaster } from 'react-hot-toast'
import AllProduct from './pages/AllProduct'

function App() {

  const routes = createBrowserRouter([
    {
      path:'/',
      element:<HomePage/>,
    },
    {
      path:'/*',
      element:<NoPage/>
    },
    {
      path:'/login',
      element:<Login/>
    },
    {
      path:'/singup',
      element:<Singup/>
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/all',
      element:<AllProduct/>
    }
  ])

  return (
    <>
      <RouterProvider router={routes} >
        
      </RouterProvider>
      <Toaster/>
    </>
  )
}

export default App
