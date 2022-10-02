import React from 'react'

const CVLink = ({ link, text }) => {
  return (
    <>
        <a href={link}
           className='btn'
           target="_blank" 
           rel='noreferrer'>{text}</a>
        
    </>
  )
}

export default CVLink