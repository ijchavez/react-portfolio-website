
import React from 'react'

import { GiCircuitry } from  'react-icons/gi'
import { TbSettingsAutomation, TbDeviceGamepad } from 'react-icons/tb'

import '../../styles/about.css'
import abMe from '../../images/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to know </h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={abMe} alt="about" />
          
          </div>
        
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <GiCircuitry className='about__icon'/>
              <h5>Testing</h5>
              <small>10+ Years Working</small>
            
            </article>
            <article className='about__card'>
              <TbSettingsAutomation className='about__icon'/>
              <h5>Automation</h5>
              <small>2+ Years Working</small>
            
            </article>
            <article className='about__card'>
              <TbDeviceGamepad className='about__icon'/>
              <h5>Game Designer</h5>
              <small>1+ Years Working</small>
            
            </article>
            
          </div>
          <p>
            10+ year of experience as a Software Quality Analyst. In-depth understanding of Software Development Life Cycle including estimation, planning, design
            and execution of tests plans in projects and complex environments for financial banking companies.
            Researcher and proactive, enthusiastic about DevOps and Testing Automation practices.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
          
        </div>
      
      </div>
    
    </section>
    
  )
}

export default About