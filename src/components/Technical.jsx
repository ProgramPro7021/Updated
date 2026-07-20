import React from 'react'
import '../css/Technical.css'

const Technical = () => {
  return (
    <section id="technical" className="technical-section">
      <h2>Technical Skills</h2>

      <div className="skills-container">

        <div className="skill-category cms">
          <h3>CMS & Web Publishing</h3>
          <ul>
            <li>Adobe Experience Manager (AEM)</li>
            <li>Sitecore CMS</li>
            <li>Web Content Management (WCM)</li>
            <li>Web Content Publishing</li>
            <li>Content Authoring</li>
            <li>Content Migration</li>
          </ul>
        </div>

        <div className="skill-category workflow">
          <h3>Project & Workflow Tools</h3>
          <ul>
            <li>Adobe Workfront</li>
            <li>Wrike</li>
            <li>Content Workflow Management</li>
            <li>Task Management</li>
          </ul>
        </div>

        <div className="skill-category frontend">
          <div className="skill-icon">💻</div>
          <h3>Frontend Technologies</h3>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6+)</li>
            <li>HTML5</li>
            <li>CSS3</li>
            <li>SCSS</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>

        <div className="skill-category standards">
          <h3>Web Standards</h3>
          <ul>
            <li>SEO</li>
            <li>WCAG Accessibility</li>
            <li>Responsive Web Design</li>
            <li>Cross-Browser Testing</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Technical