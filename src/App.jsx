import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
