import React from 'react'

import About from './assets/components/main/About'
import Contact from './assets/components/main/Contact'
import Experience from './assets/components/main/Experience'
import Footer from './assets/components/main/Footer'
import Header from './assets/components/main/Header'
import Nav from './assets/components/main/Nav'
import Portfolio from './assets/components/main/Portfolio'
import Services from './assets/components/main/Services'
import Work from './assets/components/main/Work'
import Testimonials from './assets/components/main/Testimonials'

export const App = () => {

  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Work />
        <Portfolio />
        <Testimonials />
        <Contact />
        <Footer />

    </>

  )

}
export default App