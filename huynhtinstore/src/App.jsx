import React from 'react'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<SignUp />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
