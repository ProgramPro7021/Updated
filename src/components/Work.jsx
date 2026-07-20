import React from 'react'
import '../css/Work.css'

const Work = () => {
  return (
    <section id="work" className="work-section">
      <h2>Work Experience</h2>

      <div className="work-container">

        {/* Infosys */}
        <div className="job job-tech">
          <h3>Process Specialist – Web Content Publisher</h3>
          <p className="job-duration">June 2026 – Present</p>
          <p className="job-company">Infosys | Pune, India</p>

          <ul className="split-list">
            <li>Published and maintained enterprise websites using Adobe Experience Manager (AEM).</li>
            <li>Managed publishing requests, approvals, and project workflows through Adobe Workfront.</li>
            <li>Created, updated, and organized web pages while maintaining content quality and brand consistency.</li>
            <li>Performed content validation, link testing, and quality assurance before production deployment.</li>
            <li>Implemented SEO best practices including metadata, page titles, image alt text, and URL optimization.</li>
            <li>Ensured websites met accessibility standards following WCAG guidelines.</li>
            <li>Worked closely with developers, designers, QA teams, and business stakeholders to deliver website updates.</li>
            <li>Resolved publishing issues and supported production releases across multiple websites.</li>
            <li>Maintained content versions and ensured timely delivery of publishing requests.</li>
          </ul>
        </div>

        {/* Accenture - Sitecore */}
        <div className="job job-tech">
          <h3>Sitecore Content Author</h3>
          <p className="job-duration">2022 – 2026</p>
          <p className="job-company">Accenture | Mumbai, India</p>

          <ul className="split-list">
            <li>Created and managed website content using Sitecore CMS for enterprise web applications.</li>
            <li>Managed publishing tasks, timelines, and approvals using Wrike.</li>
            <li>Configured content components, templates, and page layouts based on business requirements.</li>
            <li>Executed publishing workflows, scheduled releases, and maintained content versions.</li>
            <li>Performed content QA, browser validation, and broken-link testing before go-live.</li>
            <li>Applied SEO best practices including metadata, page titles, URL structure, and image optimization.</li>
            <li>Collaborated with developers, designers, QA teams, and project managers to deliver website enhancements.</li>
            <li>Troubleshot publishing issues and ensured accurate and timely content delivery.</li>
            <li>Participated in content migration and website maintenance activities.</li>
          </ul>
        </div>

        {/* Accenture - Healthcare */}
        <div className="job job-health">
          <h3>Health Operations Associate</h3>
          <p className="job-duration">2018 – 2022</p>
          <p className="job-company">Accenture | Mumbai, India</p>

          <ul className="split-list">
            <li>Processed healthcare insurance claims according to policy guidelines and coverage rules.</li>
            <li>Reviewed insurance documents to determine claim eligibility and benefit coverage.</li>
            <li>Handled Health Maintenance Organization (HMO) claims while ensuring compliance with client standards.</li>
            <li>Performed manual calculations, data validation, and quality checks to maintain processing accuracy.</li>
            <li>Collaborated with internal teams to resolve claim discrepancies and improve workflow efficiency.</li>
            <li>Consistently achieved quality, productivity, and SLA targets in a fast-paced environment.</li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Work