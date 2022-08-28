import React from 'react'

import SectionTitles from '../support/modules/SectionTitles'

import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { BsAward } from 'react-icons/bs'

import 'swiper/css';
import 'swiper/css/pagination';

import '../../styles/testimonials.css'

import data from '../../components/support/data/TestimonialData.js'

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <SectionTitles 
        h5 = 'Courses and'
        h2 ='Certifications'

      />
      <Swiper 
          pagination={{
            dynamicBullets: true,

          }}
          modules={[Pagination]}
          className="container testimonials__container"

      >
        {
          data.map(({ avatar, name, review, link }, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              
              </div>
              <h5 className='client__name'>{name}</h5>
                <small className='client__review'>{review}</small> 
                <a href={link} className='btn btn-primary' target="_blank" rel="noreferrer"><BsAward className='award'/></a>
            </SwiperSlide>

            )

          })

        }

      </Swiper>
    
    </section>
  
  )

}

export default Testimonials