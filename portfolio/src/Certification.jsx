import React, { useState } from 'react'
import './Certification.css';
import LaunchIcon from '@mui/icons-material/Launch';

export const Certification = () => {
  const [activeCert, setActiveCert] = useState(0);

  const certifications = [
    {
      id: 1,
      title: "Machine Learning",
      issuer: "NPTEL",
      level: "Intermediate",
      date: "2023",
      image: "./images/nptel.png",
      description: "NPTEL certification in Machine Learning fundamentals, algorithms, and practical applications.",
      skills: ["ML", "Statistics", "Python", "Scikit-learn"],
      progress: 95,
      color: "#FF6B35"
    },
    {
      id: 2,
      title: "Ethical Hacking",
      issuer: "NPTEL",
      level: "Intermediate",
      date: "2023",
      image: "./images/Ethical Hacking.png",
      description: "Ethical Hacking certification covering security attacks, vulnerabilities, and cyber forensics.",
      skills: ["Cybersecurity", "Networking", "Linux", "Recon"],
      progress: 92,
      color: "#22b455"
    },
    {
      id: 3,
      title: "Introduction to AI",
      issuer: "Google / Coursera",
      level: "Beginner",
      date: "2024",
      image: "./images/Introduction to AI.png",
      description: "Google & Coursera certified course introducing AI fundamentals, LLMs, and real-world use cases.",
      skills: ["AI Basics", "LLMs", "Prompting", "Neural Networks"],
      progress: 90,
      color: "#4285F4"
    },
    {
      id: 1,
      title: "Python Programming",
      issuer: "Python Institute",
      level: "Advanced",
      date: "2024",
      image: "./images/python.png",
      description: "Comprehensive Python programming certification covering advanced concepts, data structures, and best practices.",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      progress: 100,
      color: "#3776AB"
    }
  ];

  return (
    <div className='certify'>
      
      <div className='cert-header'>
        <h2>Certifications</h2>
        <p>Validated expertise through industry-recognized certifications</p>
      </div>

      {/* Indicators */}
      <div className='cert-showcase'>
        <div className='cert-indicators'>
          {certifications.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeCert ? 'active' : ''}`}
              onClick={() => setActiveCert(index)}
            />
          ))}
        </div>
      </div>

      {/* Mini Cards */}
      <div className='cert-grid'>
        {certifications.map((cert, index) => (
          <div 
            key={cert.id}
            className={`cert-mini-card ${index === activeCert ? 'active' : ''}`}
            onClick={() => setActiveCert(index)}
          >
            <img src={cert.image} alt={cert.title} />

            <div className='mini-content'>
              <h4>{cert.title}</h4>
              <p>{cert.issuer}</p>
              <button className='view-cert-btn'>
                <LaunchIcon /> View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Certification;
