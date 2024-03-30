import React from 'react'

import SectionTitles from '../support/modules/SectionTitles'
import { Chrono } from "react-chrono";

import { items } from '../support/data/WorkContent'
import '../../styles/work.css'

const Work = () => {
  return (
    <section id='works'>
      <SectionTitles 
        h5 = 'My Working'
        h2 ='Experience'

      />
      <div style={{ width: '100%', height: '100%' }}>
        <Chrono items={items} mode="VERTICAL" cardHeight={350}/>
      </div>
      
    </section>
  
  )

}

export default Work