import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import route from './route.jsx'
import './index.css'

let router=createBrowserRouter(route);

createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}/>
)
