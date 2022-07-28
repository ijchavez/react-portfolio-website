import React from 'react'

import {RiLinkedinFill} from 'react-icons/ri'
import {AiOutlineGithub} from 'react-icons/ai'
import {FaGitlab} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className = 'header__socials'>
        <a href="https://www.linkedin.com/in/gerardo--chavez/" target="_blank" rel='noreferrer'><RiLinkedinFill/></a>
        <a href="https://www.github.com/ijchavez" target="_blank" rel='noreferrer'><AiOutlineGithub/></a>
        <a href="https://www.gitlab.com/ijchavez" target="_blank" rel='noreferrer'><FaGitlab/></a>
    </div>
  )
}

export default HeaderSocials