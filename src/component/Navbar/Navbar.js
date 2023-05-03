import React, { useState } from 'react';
import './Navbar.css';
import logo from '../../images/logo.png'
import bg from '../../images/bg.png'
import { Link } from 'react-router-dom';



function Navbar() {

    const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

    return (

        <>
            <div className='navbar_container row'>
                <img src={bg} className='bg-img' alt='background_image' />
                <div className='nav-logo col-lg-3 col-md-11 col-sm-11'>
                    <img src={logo} alt='logo' className='logo' />
                </div>
                <ul className='col-lg-6 list '>
                    <li className='nav-list'><Link to="/">Home</Link></li>
                    <li className='nav-list'><Link to="/About">About</Link></li>
                    <li className='nav-list'><Link to="/model">Vehicle Model</Link></li>
                    <li className='nav-list'><Link to="/testmonial">Testimonials</Link></li>
                    <li className='nav-list'><Link to="/team">Our Team</Link></li>
                    <li className='nav-list'><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='col-lg-3 col-md-1 right-icon col-sm-1'>
                    <a className='sign-in sign'>Sign In</a>
                    <button className='sign-in register-btn'>Register</button>
                    <span className='open' onClick={ToggleSidebar}>&#9776; </span>
                </div>
            </div>

            <div className={`sidebar ${isOpen == true ? 'active' : ''}`}>
                <div className="sd-header">
                    <h4 className="mb-0">Sidebar Header</h4>
                    <div className="btn btn-primary" onClick={ToggleSidebar}><i className="fa fa-times">X</i></div>
                </div>
                <div className="sd-body">
                    <ul>
                        <li><a className="sd-link">Home</a></li>
                        <li><a className="sd-link">About</a></li>
                        <li><a className="sd-link">Vehicle Model</a></li>
                        <li><a className="sd-link">Testimonials</a></li>
                        <li><a className="sd-link">Our Team</a></li>
                        <li><a className="sd-link">Contact</a></li>
                    </ul>
                </div>
            </div>
            <div className={`sidebar-overlay ${isOpen == true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
        </>
    )
}

export default Navbar
