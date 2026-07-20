import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Home.css'
import resume from '../assets/Resume.pdf'

const Home = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <div> 
          <h1>Kiran Dhule</h1>
          <h2>Front End Web Developer & Sitecore/AEM Specialist</h2>
          <p className="summary">
            Experienced in building responsive, accessible, and SEO‑friendly web solutions. 
            Skilled in CMS publishing (Sitecore, AEM) and workflow tools (Wrike, Workfront), 
            with a strong focus on accuracy, usability, and performance.
          </p>
          <p className="location">📍Hinjewadi, Pune, Maharashtra</p> 
        </div>

        <div className="contact-info">
          <p><span className="icon">📧</span> 
            <a href="mailto:kirandhule50@gmail.com">kirandhule50@gmail.com</a>
          </p>
          <p><span className="icon">📞</span> 
            <a href="tel:+917021160071">7021160071</a>
          </p>
        </div>

        <div className="cta-buttons">
          <a href="#project" className="btn primary">🚀 View Projects</a>
          <a href={resume} download className="btn secondary">📄 Download Resume</a>
        </div>
      </div>
    </section>
  )
}

export default Home
