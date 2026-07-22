import React from 'react'
import '../css/Project.css'

const Project = () => {
  return (
    <section id="project" className="project-section">
      <h2>Projects</h2>

      <div className="project-container">
        <div className="project-card">
          <h3>FunFriday Interactive App</h3>
          <p className="project-tech">React.js</p>

          <p className="project-desc">
            Designed and developed an internal team-building web application to manage Fun Friday activities,
            improving engagement and participation through interactive features.
          </p>

          <ul className="project-features">
            <li>Implemented random team split functionality for fair and dynamic group creation.</li>
            <li>Built interactive mini-games to enhance team collaboration and engagement.</li>
            <li>Integrated countdown timer for managing activity sessions in real-time.</li>
            <li>Focused on efficient state management to ensure smooth and responsive user experience.</li>
            <li>Designed a modern glassmorphism-inspired UI for a clean and engaging interface.</li>
          </ul>

          <div className="project-links">
            <a 
              href="https://funfriday.online" 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-btn"
              onClick={(e) => {
                console.log("Opening FunFriday website...");
              }}
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Project