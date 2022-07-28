import React from 'react'

import{ RiHomeSmileLine, RiMacbookLine, RiBook2Line } from 'react-icons/ri'
import{ TbUser, TbMessageShare } from 'react-icons/tb'

import { useState } from 'react'

import '../../styles/nav.css'

const Nav = () => {
  const [ activeNav, setActiveNav ] = useState('#');
  function setClassName(aClassName){
    if (activeNav === aClassName){
      return 'active'

    }else{
      return ''

    }

  }
  return (
    <nav>
      <a href="#" 
         onClick={() => setActiveNav('#')} 
         className={setClassName('#')}>
            <RiHomeSmileLine/>
      
      </a>
      <a href="#about" 
         onClick={() => setActiveNav('#about')} 
         className = {setClassName('#about')}>
            <TbUser/>
      
      </a>
      <a href="#experience"
         onClick={() => setActiveNav('#experience')} 
         className = {setClassName('#experience')}>
            <RiBook2Line/>
      </a>
      <a href="#services"
         onClick={() => setActiveNav('#services')} 
         className = {setClassName('#services')}>
            <RiMacbookLine/>
      
      </a>
      <a href="#contact"
         onClick={() => setActiveNav('#contact')} 
         className = {setClassName('#contact')}>
            <TbMessageShare/>
      
      </a>
    
    </nav>
  
  )

}

export default Nav
