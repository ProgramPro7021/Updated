import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Topnav from './components/Topnav'
import Home from './components/Home'
import Technical from './components/Technical'
import Work from './components/Work'
import Project from './components/Project'
import Education from './components/Education'
import Launguage from './components/Launguage'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    const saved = window.localStorage.getItem('theme')
    return saved === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    window.localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <BrowserRouter>
      <div className={`app-layout theme-${theme}`}>
        <Topnav theme={theme} setTheme={setTheme} />   
        <Home />
        <About />
        <Technical />
        <Work />
        <Project />
        <Education />
        <Launguage />
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
