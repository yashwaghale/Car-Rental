import React from 'react';
import './Trip.css';
import car1 from '../../images/car1.png';
import person from '../../images/person.png';
import drive from '../../images/drive.png';

function Trip() {
    return (
        <>
            <div className='trip_container'>
                <p className='trip-lable'>Plan your trip now</p>
                <h1 className='trip-head'>Quick & easy car rental</h1>
                <div className='trip-cards'>
                    <div className='plan-cards'>
                        <img src={car1} alt='car_image' className='icon-trip'/>
                        <h3>Select Car</h3>
                        <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    </div>
                    <div className='plan-cards'>
                        <img src={person} alt='car_image' className='icon-trip'/>
                        <h3>Contact Operator</h3>
                        <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns.</p>
                    </div>
                    <div className='plan-cards'>
                        <img src={drive} alt='car_image' className='icon-trip'/>
                        <h3>Let's Drive</h3>
                        <p>Whether you're hitting the open road, we've got you covered with our wide range of cars.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Trip
