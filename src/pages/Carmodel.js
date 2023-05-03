import React from 'react'
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';
import PageNav from '../component/pageNav/pageNav';
import Vehicle from '../component/CarModel/Carmodel';


function Carmodel() {
    return (
        <>
            <Navbar />
            <PageNav title= "Vehicle Model"  Name= "Model"/>
            <Vehicle />
            <Footer />
        </>
    )
}

export default Carmodel
