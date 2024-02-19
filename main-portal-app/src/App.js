// Libraries
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Pages
import Login from './pages/Login'
import PasswordReset from './pages/PasswordReset'

// CSS
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/passwordreset' element={<PasswordReset/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App