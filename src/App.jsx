import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {
  const {user} = useAuthContext()

  return (
    <>
      <div className="app flex flex-col h-screen">
        <BrowserRouter>
          <Navbar />
          <div className="pages mb-auto">
            <Routes>
              <Route
                path="/"
                element={user ? <Home /> : <Navigate to="/login"/>}
              />
              <Route
                path="/login"
                element={!user ? <Login /> : <Navigate to="/"/>}
              />
              <Route
                path="/signup"
                element={!user ? <Signup /> : <Navigate to="/" />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>

      </div>
    </>
  )
}

export default App
