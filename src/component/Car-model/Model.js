import React, { useState } from 'react'
import { Fleet } from './Rentalfleet.js'
import './Model.css'
import A1 from '../../images/A1.jpg';

const Model = () => {

    const [myImage, SetMyImage] = useState("")

    return (
        <>
            <wrapper>
                <div className='model-container'>
                    <div className='model-desc'>
                        <p className='vehicle'>Vehicle Models</p>
                        <h2 className='rental-fleet'>Our rental fleet</h2>
                        <p className='choose-car'>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
                    </div>
                    <div className='row '>
                        <div className='col-lg-3'>
                            {Fleet.map((item) => {
                                return (
                                    <div className='model-section'>
                                        <div className='pick-box'>
                                            <button id='btn1'
                                                onClick={() => SetMyImage(item)}
                                                key={item.id}
                                            >{item.Name}</button>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className='box-car col-lg-9'>
                            <div className='pick-car'>
                                <img src={myImage.img} alt='main-Image' className='select-car' />
                            </div>
                            <div className='fleet-des'>
                                <div className='rent'>
                                    <span >{myImage.rent} /rent per day</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des'>Model  </span><span> {myImage.model}</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des'>Mark  </span><span> {myImage.mark}</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des' >Year  </span><span> {myImage.year}</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des'>Doors  </span><span> {myImage.Doors}</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des'>Ac  </span><span> {myImage.Ac}</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des'>Transmission  </span><span> {myImage.Transmission}</span>
                                </div>
                                <div className='model'>
                                    <span className='model-des'>Fuel  </span><span> {myImage.Fuel}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </wrapper>
        </>
    )
}

export default Model
