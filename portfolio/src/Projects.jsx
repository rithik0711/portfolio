import React, { useState, useEffect } from 'react'
import './Projects.css'
import CodeIcon from '@mui/icons-material/Code';
import LaunchIcon from '@mui/icons-material/Launch';
import GitHubIcon from '@mui/icons-material/GitHub';
import StorageIcon from '@mui/icons-material/Storage';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloudIcon from '@mui/icons-material/Cloud';

export const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "AI-Exam Conducting Portal",
      description: "Advanced machine learning system that provides personalized recommendations using collaborative filtering and deep learning algorithms.",
      image: "./src/assets/images/exam_portal.png",
      category: "Gen AI",
      tech: ["React JS", "Node JS", "Express JS", "SQL", "Docker"],
      github: "https://github.com/rithik0711/recommendation-system",
      live: "#",
      icon: <PsychologyIcon />,
      color: "#FF6B35",
      features: ["Real-time recommendations", "Scalable architecture", "95% accuracy rate"]
    }
  ];

  // Auto-scroll effect: advance until last, then stop
  useEffect(() => {
    if (currentProject >= projects.length - 1) return;
    const interval = setInterval(() => {
      setCurrentProject((prev) => Math.min(prev + 1, projects.length - 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [currentProject, projects.length]);

  const nextProject = () => {
    setCurrentProject((prev) => Math.min(prev + 1, projects.length - 1));
  };

  const prevProject = () => {
    setCurrentProject((prev) => Math.max(prev - 1, 0));
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  return (
    <div className='projects-section'>
      <div className='projects-header'>
        <h2>Featured Projects</h2>
        <p>Innovative solutions that showcase technical expertise and problem-solving skills</p>
      </div>

      <div className='projects-showcase'>
        <div className='project-carousel'>
          <button className='nav-btn prev' onClick={prevProject}>
            ‹
          </button>
          
          <div className='project-main-card'>
            <div className='project-image-container'>
              <img src={projects[currentProject].image} alt={projects[currentProject].title} />
              <div className='project-overlay'>
                <div className='project-category' style={{backgroundColor: projects[currentProject].color}}>
                  {projects[currentProject].icon}
                  <span>{projects[currentProject].category}</span>
                </div>
              </div>
            </div>
            
            <div className='project-content'>
              <h3>{projects[currentProject].title}</h3>
              <p>{projects[currentProject].description}</p>
              
              <div className='project-features'>
                {projects[currentProject].features.map((feature, index) => (
                  <div key={index} className='feature-item'>
                    <div className='feature-dot' style={{backgroundColor: projects[currentProject].color}}></div>
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className='tech-stack'>
                {projects[currentProject].tech.map((tech, index) => (
                  <span key={index} className='tech-tag'>{tech}</span>
                ))}
              </div>
              
              <div className='project-actions'>
                <a href={projects[currentProject].github} target="_blank" rel="noopener noreferrer" className='action-btn github'>
                  <GitHubIcon />
                  <span>View Code</span>
                </a>
                <a href={projects[currentProject].live} target="_blank" rel="noopener noreferrer" className='action-btn live'>
                  <LaunchIcon />
                  <span>Live Demo</span>
                </a>
              </div>
            </div>
          </div>
          
          <button className='nav-btn next' onClick={nextProject}>
            ›
          </button>
        </div>
        
        <div className='project-indicators'>
          {projects.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentProject ? 'active' : ''}`}
              onClick={() => goToProject(index)}
            />
          ))}
        </div>
      </div>

      <div className='projects-grid'>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${index === currentProject ? 'active' : ''}`}
            onClick={() => goToProject(index)}
          >
            <div className='card-header'>
              <div className='card-icon' style={{backgroundColor: project.color}}>
                {project.icon}
              </div>
              <span className='card-category'>{project.category}</span>
            </div>
            
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            
            <div className='card-tech'>
              {project.tech.slice(0, 3).map((tech, techIndex) => (
                <span key={techIndex} className='tech-chip'>{tech}</span>
              ))}
              {project.tech.length > 3 && (
                <span className='tech-more'>+{project.tech.length - 3}</span>
              )}
            </div>
            
            <div className='card-actions'>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className='card-btn'>
                <GitHubIcon />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer" className='card-btn'>
                <LaunchIcon />
              </a>
            </div>
          </div>
        ))}
      </div>

      
    </div>
  )
}

export default Projects;

