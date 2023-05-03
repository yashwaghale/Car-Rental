import React from 'react';
import './Footer.css'

function Footer() {
    return (
        <>
            <div className='footer-container row'>
                <div className='Car-rental col-lg-3'>
                    <h2>CAR Rental</h2>
                    <p>We offers a big range of vehicles for all your driving needs.
                        We have the perfect car to meet your needs.
                    </p>
                    <span><i class="bi bi-telephone-fill"></i>(123) -456-789</span><br/>
                    <span><i class="bi bi-envelope-fill"></i>carrental@gmail.com</span>
                    <p>Design by XpeedStudio </p>
                </div>
                <div className='col-lg-3 company'>
                    <h2>COMPANY</h2>
                    <ul>
                        <li>New York</li>
                        <li>Careers</li>
                        <li>Mobile</li>
                        <li>Blog</li>
                        <li>How we work</li>
                    </ul>
                </div>
                <div className='col-lg-3 working-hours'>
                    <h2>WORKING HOURS </h2>
                    <ul>
                        <li>Mon - Fri : 9:00AM - 9:00PM </li>
                        <li>Sat: 9:00AM - 19:00PM </li>
                        <li>Sun : Closed </li>
                    </ul>
                </div>
                <div className='col-lg-3 subscription'>
                    <h2>SUBSCRIPTION</h2>
                    <p>Subscribe your Email address for latest news & updates.</p>
                    <input className='footer-mail' type='mail' placeholder='Enter Email Address'/> <br/>
                    <button className='footer-submit'>Submit</button>
                </div>
            </div>
        </>
    )
}

export default Footer
