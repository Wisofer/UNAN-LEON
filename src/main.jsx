import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './layouts/Layouts.jsx'
import App from './App.jsx'
import Orientacion from './pages/Orientacion.jsx'
import AulasVirtuales from './pages/AulasVirtuales.jsx'
import CorreoInstitucional from './pages/CorreoInstitucional.jsx'
import Login from './auth/Login.jsx'
import Mapa from './pages/Mapa.jsx'
import NotFound from './pages/NotFound.jsx'
import Register from './auth/Registers.jsx'
import ForgotPassword from './auth/ForgotPassword.jsx'
import './index.css'
import About from "./pages/About.jsx"
import ResetPassword from './auth/ResetPassword.jsx'

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
        path: "Mapa",
        element: <Mapa />,
      },
      {
        path: "About",
        element: <About />,
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

  {
    path: "/forgot",
    element: <ForgotPassword />,
  },

  {
    path: "/reset-password",
    element: <ResetPassword/>,
  },

  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
