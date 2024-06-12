import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Education, Experience, Contacts, Projects,  Achievement, Header } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Skills />
            <Education /> 
            <Experience />
            <Projects />
            <Achievement />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main
