import React from 'react'
import {useState} from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
    const handleSubmit = (e) => {
    e.preventDefault();
    const serviceId = 'service_piq9345';
    const templateId = 'template_2u3g9r8';
    const publicKey = 'cuMeEZhESXuRFIyVk';
    const templateparams = {
      name: name,
      email: email,
      message: message,
    }
    emailjs.send(serviceId, templateId, templateparams, publicKey)
    .then((response)=>{
      console.log("Email sent successfully");
      setName("");
      setEmail("");
      setMessage("");
    })
    .catch((error)=>{
      console.log("Email sent failed",error);
      alert("Failed to send message");
    })
  }
  return (
    <div className='contact-section'>
      <div className='contact-header'>
        <h2>Let's Connect & Collaborate</h2>
        <p>Ready to bring innovative ideas to life? Let's discuss how we can work together</p>
      </div>
      
      <div className='contact-container'>
        <div className='contact-info'>
          <div className='info-card'>
            <div className='info-icon'>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
            </div>
            <div className='info-content'>
              <h3>Location</h3>
              <p>Coimbatore, Tamil Nadu, India</p>
            </div>
          </div>
          
          <div className='info-card'>
            <div className='info-icon'>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
            </div>
            <div className='info-content'>
              <h3>Email</h3>
              <p>rithikeswaran2005@gmail.com</p>
            </div>
          </div>
          
          <div className='info-card'>
            <div className='info-icon'>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
            </div>
            <div className='info-content'>
              <h3>Phone</h3>
              <p>+91 9344681476</p>
            </div>
            
          </div>
          <div className='action-card'>
          <h3>Resume</h3>
          <p>Get a detailed overview of my skills and experience</p>
          <div className='btn'>
            <button className='action-btn download'>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              View PDF
            </button>
            <button className='action-btn download'>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
              </svg>
              Download PDF
            </button>
          </div>
        </div>
        </div>
        
        <div className='contact-form-container'>
          <form className='contact-form'>
            <div className='form-group'>
              <input type="text" id="name" placeholder="Your Name" required name="name" value={name} onChange={(e)=> setName(e.target.value)}/>
              {/* <label htmlFor="name">Name</label> */}
            </div>
            
            <div className='form-group'>
              <input type="email" id="email" placeholder="Your Email" required  name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
              {/* <label htmlFor="email">Email</label> */}
            </div>
            
            {/* <div className='form-group'>
              <input type="text" id="subject" placeholder="Subject" required name="subject"/>
            </div> */}
            
            <div className='form-group'>
              <textarea id="message" placeholder="Your Message" rows="5" required name="message" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>
            
            <button type="submit" className='submit-btn'>
              <span onClick={handleSubmit}>Send Message</span>
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
              </svg>
            </button>
          </form>
        </div>
      </div>
      
      <div className='contact-actions'>
        
      </div>
      
      <div className='social-connect'>
        <h3>Connect on Social Media</h3>
        <div className='social-links-grid'>
          <a href="https://github.com/rithik0711" className='social-link github' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            <span>GitHub</span>
          </a>
          
          <a href="https://www.linkedin.com/in/rithikeswaran-m-27287328b/" className='social-link linkedin' target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            <span>LinkedIn</span>
          </a>
          
          <a href="#" className='social-link twitter'>
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;