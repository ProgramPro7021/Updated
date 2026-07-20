import React from 'react'
import '../css/Language.css'

const Language = () => {
  return (
    <section id="language" className="language-section">
      <h2>Languages</h2>

      <div className="language-container">
        <div className="lang-card">
          <h3>English</h3>
          <p>Fluent</p>
        </div>

        <div className="lang-card">
          <h3>Marathi</h3>
          <p>Fluent</p>
        </div>

        <div className="lang-card">
          <h3>Hindi</h3>
          <p>Fluent</p>
        </div>
      </div>
    </section>
  )
}

export default Language