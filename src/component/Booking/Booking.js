import React from 'react';
import './Booking.css';

function Booking() {
    return (
        <>
            <div className='booking-container'>
                <h2 className='book-head'>Book a car</h2>
                <form className='box-form'>
                    <div className='car-type'> 
                        <label className="book-label"><i className="bi bi-ev-front-fill"></i>Select Your Car Type<b>*</b></label><br/>
                        <select className='bookinput'>
                            <option className='select-car'>Select Your Car Type</option>
                            <option>Audi A1 S-Line</option>
                            <option>VW Glif-6</option>
                            <option>Toyota Camry</option>
                            <option>BMW 320 ModernLine</option>
                            <option>Mercedes-Benz GLK</option>
                            <option>VW Passat CC</option>
                        </select>
                    </div>
                    <div className='car-type'> 
                        <label className="book-label"><i className="bi bi-geo-alt-fill"></i>Pick Up<b>*</b></label><br/>
                        <select className='bookinput'>
                            <option>Select Pick up Location</option>
                            <option>Belgrade</option>
                            <option>Novisad</option>
                            <option>Nis</option>
                            <option>Kragujevac</option>
                            <option>Subotica</option>
                        </select>
                    </div>
                    <div className='car-type'> 
                        <label className="book-label"><i className="bi bi-geo-alt-fill"></i>Drop of<b>*</b></label><br/>
                        <select className='bookinput'>
                            <option>Select Pick up Location</option>
                            <option>Belgrade</option>
                            <option>Novisad</option>
                            <option>Nis</option>
                            <option>Kragujevac</option>
                            <option>Subotica</option>
                        </select>
                    </div>
                    <div className='car-type'> 
                        <label className="book-label"><i className="bi bi-calendar-date-fill"></i>Pick Up<b>*</b></label><br/>
                        <input className='bookinput' type='date'></input>
                    </div>
                    <div className='car-type'> 
                        <label className="book-label"><i className="bi bi-calendar-date-fill"></i>Drop of<b>*</b></label><br/>
                        <input className='bookinput' type='date'></input>
                    </div>
                    <div>
                        <button className='serch-btn'>Search</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Booking
