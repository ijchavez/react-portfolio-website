import React from 'react'

import SectionTitles from '../support/modules/SectionTitles'

import '../../styles/portfolio.css'
import data from '../../components/support/data/PortfolioData.js'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <SectionTitles 
        h5 = 'Portfolio'
        h2 ='My Recent Work'
      />
      
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, technologies, github, demo }) => {
            return(
              <article key={id}className = 'portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
    
              </div>
              <h3>{title}</h3>
              <h5>Done with {technologies}</h5>
              <div className="portfolio__item-cta">
                <a href={github} className='btn'>Repository</a>
                <a href={demo} className='btn btn-primary' target="_blank" rel="noreferrer">Live Demo</a>
              
              </div>
    
            </article>

           )
          
          })
        
        }

      </div>
    
    </section>
  
  )

}

export default Portfolio