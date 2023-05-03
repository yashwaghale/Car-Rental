import React from 'react';
import './Companyabt.css';


function Companyabt() {

    return (
        <>
            <div className='Company-abt row'>
                <div className='about-us col-lg-6'>
                    <h2>You start the engine and your adventure begins</h2>
                    <p>A career at Booking.com is all about the journey, helping you explore new challenges in a place where you can be your best self.
                        With plenty of exciting twists, turns and opportunities along the way. We have always been pioneers,
                        on a mission to shape the future of travel through cutting edge technology,
                        to make it easier for everyone to enjoy amazing experiences wherever they go.

                        Under a desert sky, or in the heart of a bustling city.
                        Discovering the perfect hideaway, or the perfect paella.
                        Thats why we are always looking for people who search for better solutions,
                        the ones eager to stray off the beaten path to find new ways of doing things.
                        Because at Booking.com its more than a job, its a journey.
                    </p>
                </div>
                <div className='col-lg-6'>
                    <video width="100%" height="100%" controls>
                        <source src='https://efbookingprod.wpenginepowered.com/wp-content/uploads/2022/11/yt5s.io-Booking.com-_-Its-more-than-a-job-its-a-journey.-1080p.mp4'
                            type="video/mp4"
                        />
                    </video>
                    {/* <button onClick={togglePlay}>
                        {isPlaying ? "Pause" : "Play"}
                    </button> */}
                </div>
            </div>
        </>
    )
}

export default Companyabt
