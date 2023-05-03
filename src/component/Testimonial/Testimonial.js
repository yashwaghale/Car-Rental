import React from 'react';
import './Testimonial.css';
import { FeedBack } from './testimonialData';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Testimonial = () => {

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className='testimonial-container'>
                <div className='review-desc'>
                    <p className='review'>Reviewed by People</p>
                    <h1 className='client'>Client's Testimonials</h1>
                    <p>Discover the positive impact we've made on the our clients by reading
                        through their testimonials. Our clients have experienced our service and results,
                        and they're eager to share their positive experiences with you.
                    </p>
                </div>


                <Slider {...settings}>

                    {FeedBack.map((item) => (
                        <div className='test_card row'>
                            <div class="card t_card" style={{ width: '20rem', height: '24rem' }}>
                                <div class="card-body">
                                    <p class="card-text">{item.data}</p>
                                    <div className=''>
                                        <img src={item.img} alt='author' className='author  ' />
                                        <div className='col-lg-12 author_detail'>
                                            <h5>{item.name}</h5>
                                            <p className=""><small className="text-muted">{item.location}</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </>
    )
}

export default Testimonial
