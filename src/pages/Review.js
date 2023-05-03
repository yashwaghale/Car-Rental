import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import PageNav from '../component/pageNav/pageNav'
import Testimoial from '../component/Testimonial/Testimonial';

function Review() {
    return (
        <>
            <Navbar />
            <PageNav title= "About us"  Name= "About"/>
            <Testimoial />
            <Footer />
        </>
    )
}

export default Review
