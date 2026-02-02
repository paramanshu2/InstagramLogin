import React from 'react'
import LoginPage from './components/LoginPage.jsx'
import SignupPage from './components/SignupPage.jsx'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
    </div>
  )
}

export default App
