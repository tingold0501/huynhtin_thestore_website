import React, { useEffect } from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route index path="/" element={<Home />} />
        <Route path="/register" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
