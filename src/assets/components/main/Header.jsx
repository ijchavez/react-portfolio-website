import React from 'react'

import CTA from '../../components/support/modules/CTA'
import ME from '../../images/me.jpg' 
import HeaderSocials from '../../components/support/modules/HeaderSocials'

import '../../styles/header.css'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Gerardo Chavez</h1>
        <h5 className='text-light'>QA Automation Engineer</h5>
        
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} className='header-img'alt="me" />
        </div>
        <a href="#contact" className='scroll__down'>Scroll Down</a>
        
      </div>
    </header>
  )
}

export default Header