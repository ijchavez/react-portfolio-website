import React from 'react'

import SectionTitles from '../support/modules/SectionTitles'
import { MdWorkOutline } from 'react-icons/md'

import '../../styles/work.css'

const Work = () => {
  return (
    <section id='works'>
      <SectionTitles 
        h5 = 'My Working'
        h2 ='Experience'

      />
      <div className="container works__container">
      <article className="work">
          <div className="work__head">
            <h3>DIC, 2022 - Present. Moove-IT</h3>

          </div>
          <ul className="work__list">
            <li>
              <div className='work__job-description'>
                  <MdWorkOutline className="work__list-icon" />
                  <p>QA Automation Engineer</p>

              </div>
              <p>Tasks:</p>
              <ul>
                <li>- Create and execute Test Cases according User Stories, using Jira and Zephyr</li>
                <li>- Create automation scripts using:</li>
                  <ul>
                    <li>Javascript</li>
                    <li>NodeJS</li>
                    <li>Cyprees.io</li>
                    <li>FakerJs</li>
                    <li>Cheerio</li>
                  </ul>
                <li>- Automation consulting and Framework creation using:</li>
                    <ul>
                      <li>Java</li>
                      <li>Selenium</li>
                      <li>TestNG</li>
                      <li>ExtentReport</li>
                      <li>PageObject</li>
                      <li>PageFactory</li>
                      <li>Multibrowser and headless option</li>
                    </ul>
              </ul>
              <p>Technologies and frameworks: Cypress.io, Javascript, Java, Selenium, Cucumber, TestNG, Git Bash, Postman</p>
            </li>
          
          </ul>
 
        </article>
        <article className="work">
          <div className="work__head">
            <h3>JUN, 2022 - NOV, 2022. ZirconTech</h3>

          </div>
          <ul className="work__list">
            <li>
              <div className='work__job-description'>
                  <MdWorkOutline className="work__list-icon" />
                  <p>QA Automation Engineer</p>

              </div>
              <p>Independent Contractor - Client: Infogain - Sabre, Air Shopping Project</p>
              <p>Tasks:</p>
              <ul>
                <li>- Create and execute Test Cases according User Stories, using Rally</li>
                <li>- Create automation scripts using:</li>
                  <ul>
                    <li>Java</li>
                    <li>Selenium</li>
                    <li>Cucumber</li>
                    <li>TestNG</li>
                  </ul>
               
              </ul>
              <p>Technologies and frameworks: Java, Selenium, Cucumber, TestNG, Rally, Git Bash, Bazel, GRPC, BloomRPC, Postman</p>
            </li>
          
          </ul>
 
        </article>
        <article className="work">
          <div className="work__head">
              <h3>DIC, 2021 - MAY, 2022. Nosis</h3>

          </div>
          <ul className="work__list">
            <li>
              <div className='work__job-description'>
                <MdWorkOutline className="work__list-icon" />
                <p>QA Automation Engineer</p>

              </div>
              <p>Proyecto Nosis Compliance:
                 Investigation Systyem, identification and classification of normative, operative and legal risks, Obligatedd Subject, PEP, Relations, Credit Report, Edicts and Bulletins.
              
              </p>
              <p>I am developing an Automation practice and mentoring for QA Manual testers.</p>
              <p>As a team member of agile squad Compliance I perform the following activities:</p>
              <ul>
                <li>- Test case design in Confluence according to Jira US.</li>
                <li>- Bug report in Confluence.</li>
                <li>- Automated testing using Java, Selenium, TestNG, PDFBox, ExtentReports.</li>
                <li>- Headless deployment for CI/CD with TeamCity and GitLab.</li>

              </ul>
              <p>API Data Governance Department project:</p>
              <ul>
                <li>- Automated testing for APIs using RestAssured, comparing with SOAP services</li>

              </ul>
            </li>
          
          </ul>
 
        </article>
        <article className="work">
          <div className="work__head">
                <h3>ABR, 2021 - NOV, 2021. G&L Group - Banco ICBC</h3>

          </div>
          <ul className="work__list">
            <li>
              <div className='work__job-description'>
                <MdWorkOutline className="work__list-icon" />
                <p>QA Automation Tester</p>
                
              </div>
              
              <p>As a team member of agile squad Multipay Mobile I perform the following activities:</p>
              <ul>
                <li>- Test case design according to Jira US.</li>
                <li>- Automated testing using Java/Selenium/TestNG.</li>
                <li>- Appium for mobile testing and Kobiton as a device farm.</li>
                <li>- Automated report creation using ExtentReports.</li>
                <li>- RestAssured/Unirest for comparing against microservices and APIs.</li>
  
              </ul>
              <p>API Trade project:</p>
              <ul>
                <li>- Automated testing for APIs using RestAssured, Unirest and Cucumber.</li>

              </ul>
              <p>Automation Testing Mentoring for starter profile team members.</p>
            </li>
          
          </ul>
 
        </article>
        <article className="work">
          <div className="work__head">
                <h3>MAR, 2010 - MAR, 2021. Red Link S.A.</h3>

          </div>
          <ul className="work__list">
            <li>
              <div className='work__job-description'>
                <MdWorkOutline className="work__list-icon" />
                <p>Sr. Quality Assurance Analyst - QA Deploy (FEB, 2012 - MAR, 2021)</p>

              </div>
              <ul>
                <li>- Application Base24 deployment in Testing, User Acceptance and Pre-Prod environments.</li>
                <li>- Actively collaborating with developers and bussiness stakeholders to clarify requirements.</li>
                <li>- Macro automatic deployment testing for Testing and User Acceptance environments.</li>
                <li>- Enhacement of a script review application leading to a significative control improvment for massive and big sized scripts.</li>
                <li>- Collaborating since 2017 with Internal Auditory Department regarding deployments in order to achieve Quality certifications.</li>
                <li>- Ensuring that performance and quality products conform to established company and regulatory standards.</li>
                <li>- Analizing manipulation data and database scripts deployed in testing, and User Acceptance, Pre-Prod and Prod environments.</li>
                <li>- Mentoring and training in EPS Deployments.</li>

              </ul>
              <p>Projects involved: </p>
              <ul>
                <li>- Continuous Integration as a company key objective for digital transformation program.</li>
                <li>- EPS: Integrated transaction payment engine across multiple financial channels.</li>
                <li>-  Transferencia Inmediata Superior (TIS): Cross Platform project of temporary transfer limit increase across eletronic banking channels</li>
                <li>-  Ley de Emergencia: 30% tax over foreign currency purchases and credit card transactions.</li>
                <li>- Debin/Credin: Allows inmediate money transfer transactions.</li>
                <li>- VALE/PEI: Multi-Bank digital wallet project.</li>
                <li>- SIGMA: Performs failure support and improves operative effieciency for ATM's and self-service kiosks.</li>

              </ul>

            </li>

            <li>
              <div className='work__job-description'>
                <MdWorkOutline className="work__list-icon" />
                <p>Sr. Quality Assurance Analyst - Multiplatform QA(MAR, 2010 - FEB, 2012)</p>

              </div>
              <p>Functional Testing in Base24, Homebanking and Internal Systems projects:</p>
              <ul>
                <li>- Test Plan design.</li>
                <li>- Test Case design and execution.</li>
                <li>- Identified and reported software defects via bug tracking tool.</li>
                <li>- Developed software documentation for assigned áreas.</li>

              </ul>
              
            </li>
          </ul>
 
        </article>
        <article className="work">
          <div className="work__head">
            <h3>NOV, 2007 - FEB, 2010. Ryaco S.A.</h3>

          </div>
          <ul className="work__list">
            <li>
              <div className='work__job-description'>
                  <MdWorkOutline className="work__list-icon" />
                  <p>Testing Analyst</p>

              </div>
              <p>Functional Testing and Support in TV Advertising Managment ERP Project</p>
              <p>Clients: AméricaTV and VTR Chile.</p>
              <ul>
                <li>- Test Plan design.</li>
                <li>- Test Case design and execution.</li>
                <li>- Researched and reported software defects.</li>
                <li>- Developed software documentation.</li>

              </ul>
              
            </li>
          
          </ul>
 
        </article>
      </div>
      
    </section>
  
  )

}

export default Work