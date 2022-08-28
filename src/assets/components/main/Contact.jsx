
import React from 'react';

import SectionTitles from '../support/modules/SectionTitles'

import { MdOutlineMail } from 'react-icons/md'
import { FaDiscord, FaWhatsapp } from 'react-icons/fa'

import '../../styles/contact.css'

import InsertForm from '../../components/support/modules/FormCreation'

const Contact = () => {
  return (
    <section id='contact'>
      <SectionTitles 
        h5 = 'Get in Touch'
        h2 ='Contact Me'

      />
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>info.gerardo.chavez@gmail.com</h5>
            <a href="mailto:info.gerardo.chavez@gmail.com" target="_blank" rel='noreferrer'>Send a message</a>

          </article>
          <article className="contact__option">
            <FaDiscord className='contact__option-icon'/>
            <h4>Discord</h4>
            <h5>lucashood#7086</h5>
            <a href="https://discord.gg/YxNp4RvA" target="_blank" rel='noreferrer'>Send a message</a>

          </article>
          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+5491134127981</h5>
            <a href="https://api.whatsapp.com/send?phone=5491134127981" target="_blank" rel='noreferrer'>Send a message</a>

          </article>

        </div>
        <InsertForm/>

      </div>


    </section>
    
  )

}

export default Contact