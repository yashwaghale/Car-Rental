import React from 'react'
import Booking from '../component/Booking/Booking';
import Cars from '../component/Cars/Cars';
import Choose from '../component/Choose/Choose';
import FAQ from '../component/FAQ/FAQ';
import Home from '../component/Home/Home';
import Navbar from '../component/Navbar/Navbar';
import Testimonial from '../component/Testimonial/Testimonial';
import Trip from '../component/trip/Trip';
import Mobile from '../component/Mobile/Mobile'
import Footer from '../component/Footer/Footer';
import Model from '../component/Car-model/Model';

function Coverpage() {
    return (
        <>
            <Navbar />
            <Home />
            <Booking />
            <Trip />
            <Model />
            <Cars />
            <Choose />
            <Testimonial />
            <FAQ />
            <Mobile />
            <Footer />

        </>
    )
}

export default Coverpage
