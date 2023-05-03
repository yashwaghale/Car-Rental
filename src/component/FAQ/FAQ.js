import React from 'react'
import './FAQ.css';

function FAQ() {
    return (
        <>
            <div className='question_container'>
                <div className='review-desc'>
                    <p className='review'>FAQ</p>
                    <h1 className='client'>Frequently Asked Questions</h1>
                    <p>Frequently Asked Questions About the Car Rental
                         Booking Process on Our Website: Answers to Common Concerns and Inquiries.
                    </p>
                </div>
                <div className='Questions'>
                    <div class="accordion" id="accordionExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                1. What is special about comparing rental car deals?
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, 
                                        ensuring you get the most value for your money. By comparing various options, 
                                        you can find deals that offer lower prices, additional services, or better car models.
                                         You can find car rental deals by researching online and comparing prices from different rental companies.</p>
                                </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                2. How do I find the car rental deals?
                                </button>
                            </h2>
                            <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>You can find car rental deals by researching online and comparing prices from 
                                        different rental companies. Websites such as Expedia, Kayak, 
                                        and Travelocity allow you to compare prices and view available rental options.
                                         It is also recommended to sign up for email newsletters and follow rental car companies
                                          on social media to be informed of any special deals or promotions.</p>    
                                  </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                3. How do I find such low rental car prices?
                                </button>
                            </h2>
                            <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <p>Book in advance: Booking your rental car ahead of time can often result in lower prices. 
                                        Compare prices from multiple companies: Use websites like Kayak, Expedia, 
                                        or Travelocity to compare prices from multiple rental car companies. 
                                        Look for discount codes and coupons: Search for discount codes and coupons
                                         that you can use to lower the rental price. Renting from an off-airport location 
                                         can sometimes result in lower prices.</p>                           
                                 </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default FAQ
