import React from 'react'
import ReactDOM from 'react-dom/client'
import Details from "./pages/Details"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Perfil from "./pages/Perfil";
import New from "./pages/New";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <New />
  </React.StrictMode>,
)
