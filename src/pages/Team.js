import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Trip from '../component/trip/Trip';
import Footer from '../component/Footer/Footer';
import PageNav from '../component/pageNav/pageNav'
import Staff from '../component/Staf/Staff';

function Team() {
    return (
        <>
            <Navbar />
            <PageNav title= "About us"  Name= "About"/>
            <Staff />
            <Trip />
            <Footer />
        </>
    )
}

export default Team
