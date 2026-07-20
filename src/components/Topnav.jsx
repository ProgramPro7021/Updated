import React, { useState } from 'react'
import '../css/Topnav.css'

const Topnav = ({ theme, setTheme }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <header className={`top-nav theme-${theme}`}>
      <nav>
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#technical" onClick={closeMenu}>Technical</a>
          <a href="#work" onClick={closeMenu}>Work</a>
          <a href="#project" onClick={closeMenu}>Project</a>
          <a href="#education" onClick={closeMenu}>Education</a>
          <a href="#language" onClick={closeMenu}>Language</a>
        </div>
      </nav>
    </header>
  )
}

export default Topnav
