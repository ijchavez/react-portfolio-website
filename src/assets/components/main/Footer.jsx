import React from 'react'

import { RiLinkedinFill } from 'react-icons/ri'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaGitlab, FaDiscord, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

import Logo from '../../images/logo.png'

import '../../styles/footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo"><img src={Logo} alt="" /></a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Certifications</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/gerardo--chavez/" target="_blank" rel='noreferrer'><RiLinkedinFill/></a>
        <a href="mailto:info.gerardo.chavez@gmail.com" target="_blank" rel='noreferrer'><MdOutlineMail/></a>
        <a href="https://discord.gg/YxNp4RvA" target="_blank" rel='noreferrer'><FaDiscord/></a>
        <a href="https://api.whatsapp.com/send?phone=5491134127981" target="_blank" rel='noreferrer'><FaWhatsapp/></a>
        <a href="https://www.github.com/ijchavez" target="_blank" rel='noreferrer'><AiOutlineGithub/></a>
        <a href="https://www.gitlab.com/ijchavez" target="_blank" rel='noreferrer'><FaGitlab/></a>

      </div>
      <div className="footer__copyright">
      <small>&copy; Gerardo Chavez 2022</small>
      <small>Created from <a href="https://www.youtube.com/watch?v=G-Cr00UYokU&ab_channel=EGATOR">EGATOR website tutorial</a></small>     

      </div>
    </footer>
  
  )

}

export default Footer