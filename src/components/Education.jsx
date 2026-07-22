import React from 'react'
import '../css/Education.css'

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>Education</h2>

      <div className="education-container">

        <div className="edu-card">
          <h3>Bachelor of Science</h3>
          <p className="edu-institute">K.V. Pendharkar College, University of Mumbai</p>
          <p className="edu-year">2018</p>
        </div>

        <div className="edu-card">
          <h3>Higher Secondary Certificate (Science)</h3>
          <p className="edu-institute">N.W. College, AK Balapur</p>
          <p className="edu-year">2014</p>
          <p className="edu-score">Percentage: 57.85%</p>
        </div>

        <div className="edu-card">
          <h3>Secondary School Certificate</h3>
          <p className="edu-year">2012</p>
          <p className="edu-score">Percentage: 68.20%</p>
        </div>

      </div>
    </section>
  )
}

export default Education