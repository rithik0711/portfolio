import React, { useState } from 'react'
import './Certification.css';
import VerifiedIcon from '@mui/icons-material/Verified';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LaunchIcon from '@mui/icons-material/Launch';

export const Certification = () => {
  const [activeCert, setActiveCert] = useState(0);

  const certifications = [
    {
      id: 1,
      title: "Python Programming",
      issuer: "Python Institute",
      level: "Advanced",
      date: "2024",
      image: "./src/assets/python.png",
      description: "Comprehensive Python programming certification covering advanced concepts, data structures, and best practices.",
      skills: ["Python", "OOP", "Data Structures", "Algorithms"],
      progress: 100,
      color: "#3776AB"
    },
    {
      id: 2,
      title: "Machine Learning",
      issuer: "NPTEL",
      level: "Intermediate",
      date: "2023",
      image: "./src/assets/nptel.png",
      description: "NPTEL certification in Machine Learning fundamentals, algorithms, and practical applications.",
      skills: ["ML", "Statistics", "Python", "Scikit-learn"],
      progress: 95,
      color: "#FF6B35"
    }
  ];

  const nextCert = () => {
    setActiveCert((prev) => (prev + 1) % certifications.length);
  };

  const prevCert = () => {
    setActiveCert((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  return (
    <div className='certify'>
      <div className='cert-header'>
        <h2>Certifications</h2>
        <p>Validated expertise through industry-recognized certifications</p>
      </div>

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
              <button className='view-cert-btn' >
                  <LaunchIcon /> View Certificate
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certification;