import React from 'react'

import Progress from '../../components/support/modules/Progress'

import SectionTitles from '../support/modules/SectionTitles'
import automationExperienceData from '../support/data/AutomationExperience'
import otherExperienceData from '../support/data/OtherExperience'

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
            {
              automationExperienceData.map(data => (
                <Progress title={data.title} done={data.done} colorOne={data.colorOne} colorTwo={data.colorTwo} />
              
              ))
            }
          </div>

        </div>
        <div className="experience__backend">
          <h3>Other</h3>
          <div className="experience__content">
          {
              otherExperienceData.map(data => (
                <Progress title={data.title} done={data.done} colorOne={data.colorOne} colorTwo={data.colorTwo} />
              
              ))
            }
          </div>

        </div>
      
      </div>
    
    </section>
  
  )

}

export default Experience