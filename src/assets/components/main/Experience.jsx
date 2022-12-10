import React from 'react'

import { BsPatchCheckFill } from 'react-icons/bs'

import Progress from '../../components/support/modules/Progress'
import SectionTitles from '../support/modules/SectionTitles'
import '../../styles/experience.css'


const Experience = () => {
  return (
    
    <section id='experience'>
      <SectionTitles 
        h5 = 'What Skills I Have'
        h2 ='My Experience'

      />
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Automation</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Selenium</h4>
                <Progress done="70" colorOne='rgba(0, 255, 0, 1)' colorTwo='rgba(43, 114, 43, 0.73)' />

              </div>
              
            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Java</h4>
                <Progress done="55" colorOne='rgba(147, 50, 50, 0.73)' colorTwo='rgba(255, 0, 0, 1)' />

              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Cypress.io</h4>
                <Progress done="35" colorOne='rgb(9, 121, 105)' colorTwo='#060707' />

              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Javascript</h4>
                <Progress done="50" colorOne='rgba(245, 200, 39, 0.64)' colorTwo='rgba(245, 157, 39, 0.89)' />
              
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Postman</h4>
                <Progress done="35" colorOne='rgba(245, 200, 39, 0.64)' colorTwo='rgba(245, 157, 39, 0.89)' />
              
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Git </h4>
                <Progress done="50" colorOne='rgba(147, 50, 50, 0.73)' colorTwo='rgba(247, 155, 7, 0.81)' />
              
              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>NodeJS</h4>
                <Progress done="45" colorOne='#1f4037' colorTwo='#99f2c8' />
                
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>gRPC</h4>
                <Progress done="20" colorOne='#00f260' colorTwo='#0575e6' />

              </div>

            </article>
          </div>

        </div>
        <div className="experience__backend">
        <h3>Other</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>English</h4>
                <Progress done="85" colorOne='rgba(153, 153, 219, 0.59)' colorTwo='rgba(6, 6, 247, 0.9)' />
              </div>

            </article>
            
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Docker</h4>
                <Progress done="30" colorOne='rgba(0, 251, 238, 0.31)' colorTwo='rgba(0, 103, 237, 0.5)' />
              
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML-CSS</h4>
                <Progress done="75" colorOne='rgba(40, 0, 255, 0.68)' colorTwo='rgba(255, 167, 0, 0.94)' />

              </div>

            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Jenkins</h4>
                <Progress done="30" colorOne='rgba(46, 45, 52, 0.68)' colorTwo='rgba(204, 34, 34, 0.75)' />
              
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React</h4>
                <Progress done="40" colorOne='rgb(86, 255, 255)' colorTwo='rgb(84, 107, 255)' />
              
              </div>
            
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Python</h4>
                <Progress done="30" colorOne='rgba(234, 247, 7, 0.81)' colorTwo='rgba(7, 247, 244, 0.51)' />

              </div>

            </article>
          </div>

        </div>
      
      </div>
    
    </section>
  
  )

}

export default Experience