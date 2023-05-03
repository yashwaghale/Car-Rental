import React from 'react'
import './Choose.css'
import cross from '../../images/cross.png';
import price from '../../images/price.png';
import charges from '../../images/charges.png';

function Choose() {
    return (
        <>
            <div className='choose-container'>
                <div className='container-1'>
                    <p className='choose_us'>Why Choose Us</p>
                    <h2 className='choose-deals'>Best valued deals you will ever find</h2>
                    <p className='choose-desc'>Discover the best deals you'll ever find with our unbeatable offers.
                        We're dedicated to providing you with the best value for your money,
                        so you can enjoy top-quality services and products without breaking the bank.
                        Our deals are designed to give you the ultimate renting experience,
                        so don't miss out on your chance to save big.
                    </p>
                    <button className='find-details'>Find Details</button>
                </div>
                <div className='container-1'>
                    <div className='country-icon'>
                        <img src={cross} alt='country-drive' className='country-drive' />
                        <h3>Cross Country Drive</h3>
                        <p>Take your driving experience to the next level with our
                            top-notch vehicles for your cross-country adventures.
                        </p>
                    </div>
                    <div className='country-icon'>
                        <img src={price} alt='country-drive' className='country-drive' />
                        <h3>All Inclusive Pricing</h3>
                        <p>Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.</p>
                    </div>
                    <div className='country-icon'>
                        <img src={charges} alt='country-drive' className='country-drive' />
                        <h3>No Hidden Charges</h3>
                        <p>Enjoy peace of mind with our no hidden charges policy.
                            We believe in transparent and honest pricing.
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Choose
