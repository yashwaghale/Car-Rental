import React from 'react';
import './Cars.css';
import cars from '../../images/cars.png'

function Cars() {
    return (
        <>
            <div className='cars-container'>
                <div className='Cars-head'>
                    <h1>Save big with our cheap car rental!</h1>
                    <p>Top Airports. Local Suppliers.<b className='cars-time'> 24/7</b> Support.</p>
                </div>
                <div>
                    <img  src={cars} alt='cars_image' className='Cars'/>
                </div>
            </div>

        </>
    )
}

export default Cars
