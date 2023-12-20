import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './pages/Login.tsx'
import SignUp from './pages/SignUp.tsx'
const route = createBrowserRouter([{
  path:'/',
  element:<App/>
},
{
  path:'/sign-in',
  element:<Login/>
},
{
  path:'/sign-up',
  element:<SignUp/>
}
])
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
