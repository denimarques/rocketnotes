import React from 'react'
import ReactDOM from 'react-dom/client'
import Details from "./pages/Details"
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SignUp />
  </React.StrictMode>,
)
