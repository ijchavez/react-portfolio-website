import React from 'react'
import CVLink from './CVLink'

const CTA = () => {
  return (
    <div className ='cta'>
        <CVLink link='https://drive.google.com/file/d/173NpNNAPl6XxKQE4UP8S3FE9E8pbnA1W/view'
                text='Download CV 🇪🇸' />
        <CVLink link='https://drive.google.com/file/d/1cz8Oz1UOUHd2kTb28cgSB-y9gcht5yNa/view'
                text='Download CV 🇬🇧' />
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA