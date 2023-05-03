import React from 'react';
import './Home.css';
import car from '../../images/car.png'
 
function Home() {
    return (
        <>
            <div className='Home_container row'>
                <div className='home-details col-lg-5 col-md-5'> 
                    <p className='plan-trip'>Plan your trip now</p>
                    <h1 className='heading-home'>Save <strong style={{color:'#ff4d30'}}>big</strong> with our car rental</h1>
                    <p className='home-desc'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
                    <span className='buttons'><button className='book-ride'>Book Ride</button><button className='learn-more'>Learn More </button> </span>
                </div>
                <div className='home_img col-lg-7 col-md-7'>
                    <img  src={car} alt='home car' className='home-car'/>
                </div>
            </div>
        </>
    )
}

export default Home
