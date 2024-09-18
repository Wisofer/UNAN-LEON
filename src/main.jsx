import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layouts.jsx'
import App from './App.jsx'
import Orientacion from './pages/Orientacion.jsx'
import AulasVirtuales from './pages/AulasVirtuales.jsx'
import CorreoInstitucional from './pages/CorreoInstitucional.jsx'
import Login from './auth/Login.jsx'
import Wifi from './pages/Wifi.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './auth/Registers.jsx'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "orientacion",
        element: <Orientacion />,
      },
      {
        path: "aulas-virtuales",
        element: <AulasVirtuales />,
      },
      {
        path: "correo-institucional",
        element: <CorreoInstitucional />,
      },
      {
        path: "wifi",
        element: <Wifi />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
