import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import PageNav from '../component/pageNav/pageNav'
import ContactMe from '../component/Contactus/Contactus';


function Contact() {
    return (
        <>
            <Navbar />
            <PageNav title= "About us"  Name= "About"/>
            <ContactMe />
            <Footer />
        </>
    )
}

export default Contact
