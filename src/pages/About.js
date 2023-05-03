import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Trip from '../component/trip/Trip';
import Footer from '../component/Footer/Footer';
import PageNav from '../component/pageNav/pageNav'
import Companyabt from '../component/Compantabt/Companyabt';

function About() {
    return (
        <>
            <Navbar />
            <PageNav title= "About us"  Name= "About"/>
            <Companyabt />
            <Trip />
            <Footer />
        </>

    )
}

export default About
