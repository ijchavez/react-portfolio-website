import React from 'react'

import SectionTitles from '../support/modules/SectionTitles'
import { BiCheck } from 'react-icons/bi'

import '../../styles/services.css'

const Services = () => {
  return (
    <section id='services'>
      <SectionTitles 
        h5 = 'What I Offer'
        h2 ='Automation'

      />
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Front End</h3>

          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <ol>
                <p>Selenium</p>
                <li><BiCheck className="service__list-icon" />TestNG</li>
                <li><BiCheck className="service__list-icon" />ExtentReports</li>
              </ol>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cypress.io</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Playwright</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>detox</p>
            
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Appium</p>

            </li>

          </ul>
        
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Microservices/API</h3>

          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>RestAssured</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>UniRest</p>
            
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Postman</p>
            
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>gRPC</p>
            
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Mocha</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Chai</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Jest</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Super Test</p>

            </li>
          </ul>
        
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Framework/Pattern</h3>

          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Cucumber</p>

            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Page Object</p>
            
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Page Factory</p>
            
            </li>
          </ul>
        
        </article>
      </div>
      
    </section>
  
  )

}

export default Services