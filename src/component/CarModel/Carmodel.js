import React from 'react';
import './Carmodel.css';
import { CarData } from './CarmodelData';

function Vehicle() {

    return (
        <>
            <div className='car-container'>

                <div className='car-lease '>
                    <h3>Choose the right lease</h3>
                    <div className='model-search'>
                        <span><input type='text' className='car-search' alt='car-search' /><i className="bi bi-search"></i></span>
                        <select>
                            <option>Relevance</option>
                            <option>Newest</option>
                            <option>Oldest</option>
                        </select>
                        <select>
                            <option>All brands</option>
                            <option>Tata</option>
                            <option>Audi</option>
                            <option>BMW</option>
                            <option>Cadillac</option>
                            <option>Chevrolet</option>
                            <option>Dodge</option>
                            <option>Ferrari</option>
                            <option>Ford</option>
                            <option>Honda</option>
                        </select>
                    </div>
                </div>

                <div className='car-cards'>
                    {CarData.map((item) => (

                        <div className="card " style={{ "width": "100%" }}>
                            <img src={item.img} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h3 className='car-name'>{item.Name}</h3>
                                <div className='car-icon'>
                                    <a><i className="bi bi-people-fill"></i>{item.people} people</a>
                                    <a><i className="bi bi-fuel-pump"></i>{item.fuel}</a>
                                    <a><i className="bi bi-speedometer"></i>{item.avg}</a>
                                    <a><i className="bi bi-car-front-fill"></i>{item.engine}</a>
                                </div>
                                <hr />
                                <div className='car-price '>
                                    <p>{item.price} /month</p>
                                    <div className='car-rent'>
                                        <a><i className="bi bi-heart"></i></a>
                                        <button>Rent Now</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default Vehicle
