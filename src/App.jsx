import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// pages and components
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login'
import Signup from './pages/Signup'


function App() {


  return (
    <>
      <div className="app flex flex-col h-screen">
        <BrowserRouter>
          <Navbar />
          <div className="pages mb-auto">
            <Routes>
              <Route
                path="/"
                element={<Home />}
              />
              <Route
                path="/login"
                element={<Login />}
              />
              <Route
                path="/signup"
                element={<Signup />}
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
