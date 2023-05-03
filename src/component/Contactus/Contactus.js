import  './Contactus.css';

const ContactMe = () => {
    return (
        <>
            <div className='contact_container'>
                <form>

                    <div className='row contact-content'>
                        <h4>Get in touch</h4>
                        <div className='input-icon col-lg-6'>
                            <i class="bi bi-person-fill icon"></i>
                            <input type='text' className='fullName input-field' alt='Full name' placeholder='Enter your name' />
                        </div>
                        <div className='input-icon col-lg-6'>
                            <i class="bi bi-envelope-fill icon"></i>
                            <input type='email' className='Email input-field' alt='Full name' placeholder='Enter email address' />
                        </div>
                        <div className='input-icon col-lg-6'>
                            <i class="bi bi-arrow-down icon"></i>
                            <select className='service input-field' alt='Full name'>
                                <option >select service Type</option>
                                <option value='Property Management'>Special rates on car booking</option>
                                <option value='Mortage service'>Mobile Phpne Reservation</option>
                                <option value='Consuting Service'>Unlimited Miles Rental</option>
                                <option value='Home Buying'>One way car Rental</option>
                            </select>
                        </div>
                        <div className='input-icon col-lg-6'>
                            <i class="bi bi-telephone-fill icon"></i>
                            <input type='number' maxLength={"10"} className='fullName input-field' alt='Full name' placeholder='Enter phone number' />
                        </div>
                        <div className='input-icon col-lg-12'>
                            <i class="bi bi-pen-fill icon"></i>
                            <textarea row='5' cols='10' className='fullName input-field' alt='Full name' placeholder='Enter message'></textarea>
                        </div>
                        <label> <input type='checkbox' className='condition' />Save my name, email, and website in this browser for the next time I comment.</label>
                        <button className='servicebtn'>GET A FREE SERVICE</button>
                    </div>
                </form>
            </div>

        </>
    )
}

export default ContactMe;