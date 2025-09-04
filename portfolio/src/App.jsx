import { useState } from 'react'
import './App.css'
import Skills from './Skills';
import Certification from './Certification'
import Education from './Education'
import Contact from './Contact'
import Projects from './Projects'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import IconButton from "@mui/material/IconButton";
import CodeIcon from '@mui/icons-material/Code';
import PsychologyIcon from '@mui/icons-material/Psychology';
import StorageIcon from '@mui/icons-material/Storage';
import CloudIcon from '@mui/icons-material/Cloud';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const openLinkdin = () => {
    window.open('https://www.linkedin.com/in/rithikeswaran-m-27287328b/','_blank')
  }
  const openGithub =() =>{
    window.open('https://github.com/rithik0711','_blank');
  }
  const openLeetcode =() =>{
    window.open('https://leetcode.com/u/rithikeswaran_m/','_blank');
  }
  return (
    <>
      <div className='body'>
        <div className='bg'>
          <div className='header'>
            <IconButton className='menu-toggle' onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation">
              ☰
            </IconButton>
            <div className={`list ${menuOpen ? 'open' : ''}`} onClick={() => setMenuOpen(false)}>
              <a href="/" className='about'>About</a>
              <a href="#skill">Skills</a>
              {/* <a href="#education">Education</a> */}
              <a href="#projects">Projects</a>
              <a href="#certification">Certification</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
          
          <div className='content'>
            <div className='name'>
              <h2>Rithikeswaran M</h2>
              <h3>Machine Learning Engineer</h3>
              
              <div className='social-links'>
                <IconButton onClick={openGithub} className='icon1' title="GitHub Profile">
                  <GitHubIcon />
                </IconButton>
                <IconButton onClick={openLinkdin} className='icon2' title="LinkedIn Profile">
                  <LinkedInIcon />
                </IconButton>
                <IconButton onClick={openLeetcode} className='icon3' title="Leetcode Profile">
                  <img src="./src/assets/images/LeetCode.png" alt="" />
                </IconButton>
              </div>
            </div>
            
            <div className='profile-section'>
              <img src="./src/assets/images/my-pic.jpg" alt="Rithikeswaran M" className='profile'/>
            </div>
          </div>
          
          <div className='scroll-indicator'>
            <div className='scroll-arrow'></div>
            <span>Scroll to explore</span>
          </div>
        </div>
        
        <section id='skill'>
          <Skills />
        </section>
        
        {/* <section id='education'>
          <Education />
        </section> */}
        
        <section id='projects'>
          <Projects />
        </section>
        
        <section id='certification'>
          <Certification />
        </section>
        
        <section id='contact'>
          <Contact />
        </section>
      </div>
    </>
  )
}

export default App;
